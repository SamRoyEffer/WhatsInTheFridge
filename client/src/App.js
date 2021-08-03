import logo from "./logo.svg";
import "./App.scss";
import Login from "./components/login";
import Footer from "./components/Footer";
import useApplicationData from "./hooks/useApplicationData";
import Registration from "./components/Registration";
import Header from "./components/Header";

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
      <Header />

      <Registration />

      <ul> {userList} </ul>
      <Footer />
    </main>
  );
};

export default App;
