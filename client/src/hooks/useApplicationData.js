import { useEffect, useState } from "react";
import axios from "axios";

const defaultState = {
  ingredients: {},
  recepies: [],
};

const useApplicationData = () => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/recipe"),
      //axios.get("http://localhost:3001/api/ingredients"),
    ]).then((all) => {
      console.log("ALLL", all);
      setState((prev) => ({
        //...prev,
        //ingredients: all[2].data,
        //recepies: all[1].data,
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

  function submitRecipe(recipe) {
    return axios
      .put("http://localhost:3001/api/recipe_add", recipe)
      .then(() => {
        const newRecipe = state.includes(recipe);
        if (newRecipe) {
          return;
        }
        setState({
          ...state,
          recepies: [...state.recepies, recipe],
        });
      });
  }
  return { submitIngredient, state, submitRecipe };
};

export default useApplicationData;
