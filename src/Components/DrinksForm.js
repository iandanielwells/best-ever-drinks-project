import React from "react";
import Button from "react-bootstrap/Button";

function DrinksForm({ setDrinks }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newDrink = {
      name: event.target.name.value,
      iamge: event.target.image.value,
      instructions: event.target.instructions.value,
      ingredients: [event.target.ingredients.value],
    };
    console.log(newDrink);

    fetch("http://localhost:3000/cocktails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDrink),
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
    setDrinks((prev) => [...prev, newDrink]);
  }

  return (
    <div className="new-drinks-form">
      <h2>Build Your Own Drink!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Drink Name" />
        <input type="text" name="image" placeholder="Cocktail Image" />
        <input type="text" name="instructions" placeholder="Instructions" />
        <input type="text" name="ingredients" placeholder="Ingredients" />
        <Button variant="outline-info">Add Cocktail</Button>{" "}
      </form>
    </div>
  );
}
export default DrinksForm;
