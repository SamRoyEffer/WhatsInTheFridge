import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
const App = () => {
<<<<<<< HEAD
  return <Login />;
=======
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

      <ul> {userList} </ul>
    </div>
  );
>>>>>>> master
};

export default App;
