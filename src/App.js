import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"
import Headers from "./Components/Headers";
import DrinksList from "./Components/DrinksList";
import logo from "./Components/download.gif";
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
      <Switch>
        <header className="App-header">

          <Route>
          <Headers setSearch={setSearch} logo={logo} />
          </Route>

          <Route exact path="/cocktails/new">
          <DrinksForm setDrinks={setDrinks} />
          </Route>

          <Route exact path="/cocktails">
          <DrinksList drinks={drinks} search={search} />
          </Route>

        </header>
      </Switch>
    </div>
  );
}
export default App;
