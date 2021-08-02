import "./App.css";
import "./App.scss";
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
      <nav className="navTop">
        <p className="projectName"> What's in the fridge? </p>
        <p className="navButtonList">
          <button className="navButton">Login</button>
          <button className="navButton">Register</button>
        </p>
      </nav>

      <ul> {userList} </ul>
    </div>
  );
};

export default App;
