import AutoComplete from "./auto_complete";
import Recipes from "./recipes";
import './Fridge.scss';
import Navbar from "../Homepage/Navbar/Navbar";

export default function Fridge() {
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