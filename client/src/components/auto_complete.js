import React, {useState, useCallback} from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash.debounce'
// import match from 'autosuggest-highlight/match';
// import parse from 'autosuggest-highlight/parse';

const fakeData = [
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


const AutoComplete = ({title}) => {
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
  const option = await options(value).then((res) => {
    console.log("++++", res)
    setSuggestion(res)
    // setValue(value);
  })

  
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }
  return option
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
      <form className="w-full m-auto max-w-sm lg:max-w-md mb-4 relative">
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