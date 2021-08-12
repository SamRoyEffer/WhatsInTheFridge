import AutoComplete from "./auto_complete";
import Recipes from "./recipes";
import "./Fridge.scss";
import Navbar from "../Homepage/Navbar/Navbar";
import useApplicationData from "../../hooks/useApplicationData";

export default function Fridge(props) {
  const { submitIngredient, state, setState, deleteIngredient } =
    useApplicationData();
  return (
    <section>
      <nav>
        <Navbar {...props} />
      </nav>
      <div className="fridge">
        <div className="autocompleteContainer">
          <div className="background">
            <AutoComplete
              {...{ submitIngredient, state, setState, deleteIngredient }}
            />
          </div>
        </div>

        <div className="recipesContainer">
          <Recipes {...{ state }} />
        </div>
      </div>
    </section>
  );
}
