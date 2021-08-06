import React, {useState, useCallback} from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash.debounce'

const AutoComplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestion] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

const options = async (value) => {
  let resolved = await fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=9768625974324441a01777879d94c9b2&query=${value}&number=5`)
  .then((res) => {return res.json()})
  return resolved
};

const debounceSave = useCallback(
  debounce(newValue => getSuggestions(newValue), 500, console.log("this was called")), [],
)

const onChange = (e, { newValue }) => {
  e.preventDefault();
  setValue(newValue)
  if (value !== newValue) {
  debounceSave(newValue)
  }
};

  const onSuggestionsFetchRequested = ({ value }) => {
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestion([]);
    // setSelectedSuggestion(null)
  };

  const escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = async (value) => {
  console.log("inside get suggestions")
    await options(value).then((res) => {
    console.log("++++", res)
    // const escapedValue = escapeRegexCharacters(res.name.trim())
    setSuggestion(res)
  })
};


  const onSuggestionSelected = (e, { suggestion }) => {
    setSelectedSuggestion(suggestion)

    // const newIngredient = {
    //   id: Math.floor(Math.random() * 100000000),
    //   value: suggestionValue
    // };
    // setValue('');
  };


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => {
  return (
    <div >
        <strong className="text-gray-600 font-normal" >
        {suggestion.name}
        </strong>
    </div>
  );
};

function renderSuggestionsContainer({ containerProps, children, query }) {
  return (
    <div {...containerProps}>
      {children}
    </div>
  );
}
    
  const inputProps = {
    placeholder: 'Ex: apples',
    value,
    onChange
  };

      // console.log("---", selectedSuggestion)
      // console.log("+++", suggestions)
    // Finally, render it!
    return (
      <form className="autosuggest">
      <Autosuggest
        onChange={onChange}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderSuggestionsContainer={renderSuggestionsContainer}
        onSuggestionSelected={onSuggestionSelected}
      />
      {selectedSuggestion ? <button type="submit">Add</button> : <h2>please use selected suggestion</h2>}
      
      </form>
    );
  }

  export default AutoComplete