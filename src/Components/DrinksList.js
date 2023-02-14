import React from "react";
import DrinksCard from "./DrinksCard";

function DrinksList({ drinks, search }) {
  const filteredDrinks = drinks.filter((drink) => {
    const nameSearch = drink.name.toLowerCase();
    return nameSearch.includes(search.toLowerCase());
  });

  return (
    <ul className="cards">
      {filteredDrinks.map((drink) => {
        return <DrinksCard {...drink} key={drink.id} />;
      })}
    </ul>
  );
}
export default DrinksList;
