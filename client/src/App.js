import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import AutoComplete from "./components/auto_complete";

const App = () => {
  return (
    <div className="App">
      <h1> test page </h1>

      <AutoComplete />
    </div>
  );
};

export default App;
