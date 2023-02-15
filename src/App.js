import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Headers from "./Components/Headers";
import DrinksList from "./Components/DrinksList";
import logo from "./Components/download.gif";
import DrinksForm from "./Components/DrinksForm";
import FavoriteDrink from "./Components/FavoriteDrinks";

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
      <Switch>
        <header className="App-header">
          <Route>
            <Headers setSearch={setSearch} logo={logo} />
          </Route>

          <Route exact path="/cocktails/new">
            <DrinksForm setDrinks={setDrinks} />
          </Route>
          <Route exact path="/cocktails/favorites">
            <FavoriteDrink
              drinks={drinks}
              search={search}
              setDrinks={setDrinks}
            />
          </Route>
          <Route exact path="/">
            <DrinksList drinks={drinks} search={search} setDrinks={setDrinks} />
          </Route>
        </header>
      </Switch>
    </div>
  );
}
export default App;
