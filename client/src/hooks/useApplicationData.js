import { useEffect, useState } from "react";
import axios from "axios";

const defaultState = {
  ingredients: [],
  recepies: [],
};

const useApplicationData = () => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/recipe"),
      axios.get("http://localhost:3001/api/ingredients"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        ingredients: all[1].data,
      }));
    });
  }, []);

  const submitIngredient = (ingredient) => {
    axios
      .post("http://localhost:3001/api/ingredients", ingredient)
      .then((res) => {
        const ingredients = state.ingredients;
        ingredients.push(res.data);
        setState((prev) => ({
          ...prev,
          ingredients,
        }));
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  const deleteIngredient = (ingredient) => {
    axios.post("http://localhost:3001/api/ingredients_delete", ingredient);
  };
  return { submitIngredient, state, deleteIngredient, setState };
};

export default useApplicationData;
