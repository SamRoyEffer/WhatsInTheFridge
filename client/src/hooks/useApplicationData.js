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
    axios
      .post("http://localhost:3001/api/ingredients", ingredient)
      .then((res) => {
        console.log("NEW", res);
        // const sameIngredientExists = state.ingredients.includes(ingredient);
        // if (sameIngredientExists) {
        //   return;
        // }
        setState((prev) => ({
          ...prev,
          ingredients: [...prev.ingredients, res.data],
        }));
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  // function submitRecipe(recipe) {
  //   console.log("HIT ME");
  //   const newState = state;
  //   newState.recepies.push(recipe);
  //   setState({ ...newState });
  //   const newRecipe = state.includes(recipe);
  //   if (newRecipe) {
  //     return;
  //   }
  //   axios.post("http://localhost:3001/api/recipe_add", recipe);
  //   return state;
  // }
  return { submitIngredient, state };
};

export default useApplicationData;
