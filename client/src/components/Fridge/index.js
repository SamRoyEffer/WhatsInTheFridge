import AutoComplete from "./auto_complete";
import Recipes from "./recipes";
import './Fridge.scss';
import Navbar from "../Homepage/Navbar/Navbar";
import IngredientList from "./ingredientList";
import useApplicationData from "../../hooks/useApplicationData";

export default function Fridge() {
  const { state } = useApplicationData();
  return (
    <section>
    <nav>
    <Navbar />
    </nav>
    <div className='fridge'>
      
      <div className='autocompleteContainer'>
      <div className="background">
        <AutoComplete />
    </div>
      </div>

      <div className='recipesContainer'>
        <Recipes />
      </div>
    </div>
    </section>
    )
    }

