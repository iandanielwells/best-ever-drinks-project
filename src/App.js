import "./App.css";
import { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import DrinksList from "./Components/DrinksList";
import Search from "./Components/Search";
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
        <Headers />
        <Search 
        search={search}
        setSearch={setSearch}/>
        <DrinksForm />
        <DrinksList 
        drinks={drinks} 
        search={search}/>
      </header>
    </div>
  );
}
export default App;