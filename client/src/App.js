import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import AutoComplete from './components/auto_complete'
import Recipes from "./components/recipes";

const App = () => {
  const { state } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));
  return (
    <div className="App">
      <h1> test page </h1>
      <AutoComplete/>
      <Recipes/>
    </div>
  );
};

export default App;
