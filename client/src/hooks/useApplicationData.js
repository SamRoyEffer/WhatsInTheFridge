import { useEffect, useState } from "react";
import axios from "axios";

const defaultState = {
  ingredients: [],
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
      axios.get("/api/ingredients/:ingredientName"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        ingredients: all[0].data,
      }));
    });
  }, []);
};

export default useApplicationData;
