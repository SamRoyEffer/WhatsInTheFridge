import "./App.css";
import {React} from "react";
import Homepage from "./components/Homepage";
import AutoComplete from './components/auto_complete'
import useApplicationData from "./hooks/useApplicationData";
import useVisualMode from "./hooks/useVisualMode";

export default function App(props) {
  const { state } = useApplicationData();

  const {mode, transition} = useVisualMode('HOME') 
  const HOME = "HOME";
  const FRIDGE = "FRIDGE";
  
  const loginPage = () => {
    transition(FRIDGE);
  }

  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.full_name} {user.email}{" "}
    </li>
  ));

  return (
    <div className="App">
      {mode === HOME && <Homepage onFridge={loginPage()} />}
      {mode === FRIDGE && <AutoComplete/>}
    </div>
  );
};


