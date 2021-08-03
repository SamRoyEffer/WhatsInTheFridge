import logo from "./logo.svg";
import "./App.scss";
import Login from "./components/login";
import Footer from "./components/Footer";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { state } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));
  return (
    <main id="App">
      <h1> test page </h1>
      <Login />
      <div id="footer">
        <Footer />
      </div>

      <ul> {userList} </ul>
    </main>
  );
};

export default App;
