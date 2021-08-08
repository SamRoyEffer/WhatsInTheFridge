import AutoComplete from "./auto_complete";
import Recipes from "./recipes";
import './Fridge.scss';

export default function Fridge() {
  return (
    <div className='fridge'>
      <div className='autocompleteContainer'>
        <AutoComplete />
      </div>

      <div className='recipesContainer'>
        <Recipes />
      </div>
    </div>
  )
}