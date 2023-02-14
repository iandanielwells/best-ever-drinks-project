import "./App.css";
import { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import DrinksList from "./Components/DrinksList";

import DrinksForm from "./Components/DrinksForm";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(" http://localhost:3000/cocktails")
      .then((resp) => resp.json())
      .then((data) => setDrinks(data));
  }, []);

  return (
    <div className="app">
      <header className="App-header">
        <Headers setSearch={setSearch} />
        <DrinksForm setDrinks={setDrinks} />
        <DrinksList drinks={drinks} search={search} />
      </header>
    </div>
  );
}
export default App;
