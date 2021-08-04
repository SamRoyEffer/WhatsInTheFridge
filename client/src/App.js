import logo from "./logo.svg";
import "./App.scss";
import Login from "./components/login";
import Footer from "./components/Footer";
import useApplicationData from "./hooks/useApplicationData";
import Registration from "./components/Registration";
import Header from "./components/Header";

const App = () => {
  return (
    <main>
      <body className="appBody">
        <nav className="appHead">
          <Header />
        </nav>

        <footer className="appFooter">
          <Footer />
        </footer>
      </body>
    </main>
  );
};

export default App;
