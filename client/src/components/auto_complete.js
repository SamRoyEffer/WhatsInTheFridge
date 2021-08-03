import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest';
// import match from 'autosuggest-highlight/match';
// import parse from 'autosuggest-highlight/parse';

const options = [
  {
      "name": "apple",
      "image": "apple.jpg",
      "id": 9003,
      "aisle": "Produce",
      "possibleUnits": [
          "small",
          "large",
          "piece",
          "slice",
          "g",
          "extra small",
          "medium",
          "oz",
          "cup slice",
          "cup",
          "serving"
      ]
  },
  {
      "name": "applesauce",
      "image": "applesauce.png",
      "id": 9019,
      "aisle": "Canned and Jarred",
      "possibleUnits": [
          "g",
          "oz",
          "cup",
          "serving",
          "tablespoon"
      ]
  },
  {
      "name": "apple juice",
      "image": "apple-juice.jpg",
      "id": 9016,
      "aisle": "Beverages",
      "possibleUnits": [
          "g",
          "drink box",
          "fl oz",
          "oz",
          "teaspoon",
          "cup",
          "serving",
          "tablespoon"
      ]
  },
  {
      "name": "apple cider",
      "image": "apple-cider.jpg",
      "id": 1009016,
      "aisle": "Beverages",
      "possibleUnits": [
          "g",
          "drink box",
          "fl oz",
          "oz",
          "teaspoon",
          "bottle NFS",
          "cup",
          "serving",
          "tablespoon"
      ]
  },
  {
      "name": "apple jelly",
      "image": "apple-jelly.jpg",
      "id": 10019297,
      "aisle": "Nut butters, Jams, and Honey",
      "possibleUnits": [
          "g",
          "oz",
          "packet",
          "teaspoon",
          "cup",
          "serving",
          "tablespoon"
      ]
  },
]


const AutoComplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestion] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

const onChange = (e, { newValue }) => {
  e.preventDefault();
  setValue(newValue);
  setSelectedSuggestion(null)
};

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestion(getSuggestions(value));
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
const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(escapedValue, 'i');

  const sortedByLength = options.sort((a, b) => {
    return a.name.length - b.name.length;
  });

  return sortedByLength.filter(ingredient => regex.test(ingredient.name));
};


  const onSuggestionSelected = (e, { suggestion }) => {
    setSelectedSuggestion(suggestion.id)

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
    <div className="">
        {suggestion.name}
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

  // let apiTest = fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=9768625974324441a01777879d94c9b2&query=appl&number=5`)
  // .then((res) => res.json())
  // .then((data) => {setState(data)})
  // .catch(() => console.log("error"))

      console.log("---", selectedSuggestion)
      console.log("+++", suggestions)
    // Finally, render it!
    return (
      <form className="w-full m-auto max-w-sm lg:max-w-md mb-4 relative">
      <Autosuggest
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