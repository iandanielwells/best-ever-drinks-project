import React from "react";
import DrinksCard from "./DrinksCard";

function DrinksList({ drinks }) {
  return (
    <ul className="cards">
      {drinks.map((drink) => {
        return <DrinksCard {...drink} />;
      })}
    </ul>
  );
}
export default DrinksList;