import "./App.css";
import { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import DrinksList from "./Components/DrinksList";
import DrinkForm from "./Components/DrinksForm";


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
        <DrinkForm />
        <DrinksList drinks={drinks} />
      </header>
    </div>
  );
}
export default App;