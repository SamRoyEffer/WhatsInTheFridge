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
      axios.get("/api/fridge"),
      axios.get("/api/recipe"),
      axios.get("/api/ingredients"),
    ]).then((all) => {
      setState((prev) => ({}));
    });
  }, []);
  function submitIngredient(ingredient) {
    return axios.put("/api/ingredients").then(() => {});
  }
};

export default useApplicationData;
