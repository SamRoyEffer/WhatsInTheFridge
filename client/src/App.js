import "./App.css";
import {React} from "react";
import Homepage from "./components/Homepage";
import AutoComplete from './components/Fridge/auto_complete'
import useApplicationData from "./hooks/useApplicationData";
import useVisualMode from "./hooks/useVisualMode";
import Recipes from "./components/Fridge/recipes";
import Fridge from "./components/Fridge/index"

export default function App(props) {
  const { state } = useApplicationData();

  const {mode, transition} = useVisualMode('HOME') 
  const HOME = "HOME";
  const FRIDGE = "FRIDGE";
  
  const fridgePage = () => { 
    transition(FRIDGE);
  }

  


  return (
    <div className="App">
      {mode === HOME && <Homepage onFridge={fridgePage}/>}
      {mode === FRIDGE && <Fridge/>}
    </div>
  );
}
