import { useEffect, useState } from "react";
import axios from "axios";

const defaultState = {
  ingredients: {},
  recipies: [],
  favRecipies: [],
};

const useApplicationData = () => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    Promise.all([
      //axios.get("http://localhost:3001/api/fridge"),
      axios.get("http://localhost:3001/api/recipe"),
      //axios.get("http://localhost:3001/api/ingredients"),
    ]).then((all) => {
      console.log("ALLL", all);
      setState((prev) => ({
        //...prev,
        //ingredients: all[2].data,
        //recipies: all[1].data,
        //favRecipies: all[0].data,
      }));
    });
  }, []);
  function submitIngredient(ingredient) {
    return axios
      .put("http://localhost:3001/api/ingredients", ingredient)
      .then(() => {
        const newIngredient = state.includes(ingredient);
        if (newIngredient) {
          return;
        }
        setState({
          ...state,
          ingredients: [...state.ingredients, ingredient],
        });
      });
  }
  return { submitIngredient, state };
};

export default useApplicationData;
