import React, { useState, useCallback } from "react";
import Autosuggest from "react-autosuggest";
import debounce from "lodash.debounce";
import "./auto_complete.scss";
import IngredientList from "./ingredientList";
import useApplicationData from "../../hooks/useApplicationData";
import { Button } from "react-bootstrap";
import { findIndex } from "lodash";
// import { loadIngredients } from "../../helper/helpers";
// import { sortedLastIndex } from "lodash";

const AutoComplete = () => {
  const { submitIngredient, state, setState } = useApplicationData();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const options = async (value) => {
    let resolved = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=e98bce1a8d334de8923e5718dd14b7e0&query=${value}&number=5`
    ).then((res) => {
      return res.json();
    });
    return resolved;
  };

  const debounceSave = useCallback(
    debounce((newValue) => getSuggestions(newValue), 500),
    []
  );

  const onChange = (e, { newValue }) => {
    e.preventDefault();
    setValue(newValue);
    if (value !== newValue) {
      debounceSave(newValue);
    }
    setSelectedSuggestion(null);
  };

  const onSuggestionsFetchRequested = ({ value }) => {};

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestion([]);
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = async (value) => {
    const option = await options(value).then((res) => {
      setSuggestion(res);
    });
    return option;
  };

  const onSuggestionSelected = (e, { suggestion }) => {
    setSelectedSuggestion(suggestion);
    setValue(suggestion.name);
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => {
    return (
      <div>
        <strong className="text-gray-600 font-normal">{suggestion.name}</strong>
      </div>
    );
  };

  function renderSuggestionsContainer({ containerProps, children, query }) {
    return <div {...containerProps}>{children}</div>;
  }

  const removeIngredient = (i) => {
    const ingredients = state.ingredients.filter(
      (ingredient) => ingredient.id != i.id
    );
    setState((prev) => ({
      ...prev,
      ingredients,
    }));
  };

  const checkIngredient = (selectedSuggestion) => {
    const exists = state.ingredients.findIndex(
      (ingredient) => ingredient.name === selectedSuggestion.name
    );
    if (exists < 0) {
      submitIngredient(selectedSuggestion);
    }
  };

  const inputProps = {
    placeholder: "Ex: apples",
    value,
    onChange,
  };

  // Finally, render it!
  return (
    <section>
      <form className="autosuggest">
        <h3>
          <b>Ingredient Search:</b>
        </h3>
        <Autosuggest
          onChange={onChange}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          focusInputOnSuggestionClick={false}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderSuggestionsContainer={renderSuggestionsContainer}
          onSuggestionSelected={onSuggestionSelected}
        />
        {selectedSuggestion ? (
          <Button
            className="addButton"
            variant="secondary"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              setValue("");
              setSelectedSuggestion(null);
              checkIngredient(selectedSuggestion);
            }}
          >
            Add
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            Add
          </Button>
        )}
      </form>
      <div>
        <IngredientList
          ingredients={state.ingredients}
          removeIngredient={removeIngredient}
        />
      </div>
    </section>
  );
};

export default AutoComplete;
