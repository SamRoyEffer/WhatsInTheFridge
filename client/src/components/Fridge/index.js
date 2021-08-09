import AutoComplete from "./auto_complete";
import Recipes from "./recipes";
import IngredientList from "./ingredientList";
import useApplicationData from "../../hooks/useApplicationData";

export default function Fridge() {
  const { state } = useApplicationData();
  return (
    <div>
      <AutoComplete />
      <IngredientList />
      <Recipes />
    </div>
  );
}
