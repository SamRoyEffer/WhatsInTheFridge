import "./App.css";
import Homepage from "./components/Homepage";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { state, dispatch } = useApplicationData();

  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.full_name} {user.email}{" "}
    </li>
  ));

  return (
    <div className="App">
      <Homepage/>
      App
    </div>
  );
};

export default App;
