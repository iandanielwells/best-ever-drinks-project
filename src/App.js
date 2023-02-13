import "./App.css";
import { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import DrinksList from "./Components/DrinksList";

function App() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:3000/cocktails")
      .then((resp) => resp.json())
      .then((data) => setDrinks(data));
  }, []);
  return (
    <div className="app">
      <header className="App-header">
        <Headers />
        <DrinksList drinks={drinks} />
      </header>
    </div>
  );
}
export default App;