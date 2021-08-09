import "./App.css";
import { React } from "react";
import Homepage from "./components/Homepage";
import useApplicationData from "./hooks/useApplicationData";
import useVisualMode from "./hooks/useVisualMode";
import Fridge from "./components/Fridge/index";

export default function App(props) {
  const { state } = useApplicationData();

  const { mode, transition } = useVisualMode("HOME");
  const HOME = "HOME";
  const FRIDGE = "FRIDGE";

  const fridgePage = () => {
    transition(FRIDGE);
  };

  return (
    <div className="App">
      <div className="App">
        {mode === HOME && <Homepage onFridge={fridgePage} />}
        {mode === FRIDGE && <Fridge />}
      </div>
    </div>
  );
}
