import { useEffect, useState } from "react";
import axios from "axios";

const defaultState = {
  ingredients: [],
  recepies: [],
};

const useApplicationData = () => {
  const [state, setState] = useState(defaultState);
  console.log("INSIDE APP DATA", state);
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/recipe"),
      axios.get("http://localhost:3001/api/ingredients"),
    ]).then((all) => {
      console.log("ALLL", all);
      setState((prev) => ({
        ...prev,
        ingredients: all[1].data,
        // recepies: all[1].data,
      }));
    });
  }, []);

  const submitIngredient = (ingredient) => {
    console.log("HIT ME");
    const newState = state;
    newState.ingredients.push(ingredient);
    setState({ ...newState });
    // setState({
    //   ...state,
    //   ingredients: [...state.ingredients, ingredient],
    // });
    return state;
    // return axios
    //   .post("http://localhost:3001/api/ingredients", ingredient)
    //   .then((res) => {
    //     console.log("NEW+++++++++", res);
    //     const sameIngredientExists = state.ingredients.includes(ingredient);
    //     if (sameIngredientExists) {
    //       return null;
    //     }
    //     setState({
    //       ...state,
    //       ingredients: [...state.ingredients, ingredient],
    //     });
    //     return res;
    //   })
    //   .catch((err) => {
    //     console.log("ERROR", err);
    //   });
  };

  function submitRecipe(recipe) {
    return axios
      .post("http://localhost:3001/api/recipe_add", recipe)
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
