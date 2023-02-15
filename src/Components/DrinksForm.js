import React from "react";
import Button from "react-bootstrap/Button";

function DrinksForm({ setDrinks }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newDrink = {
      name: event.target.name.value,
      image: event.target.image.value,
      instructions: event.target.instructions.value,
      ingredients: event.target.ingredients.value.split("\n"),
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
    <div>
      <form onSubmit={handleSubmit} className="new-drinks-form">
        {" "}
        <h2>Build Your Own Drink!</h2>
        <input type="text" name="name" placeholder="Drink Name" />
        <input
          type="text"
          name="image"
          className="imageInput"
          placeholder="Cocktail Image"
        />
        <br />
        <textarea
          className="inst"
          type="text"
          name="instructions"
          placeholder="Instructions"
        />
        <br />
        <textarea
          className="Ing"
          type="text"
          name="ingredients"
          placeholder="Press Enter after each ingredient"
        />
        <Button type="submit" variant="outline-info">
          Add Cocktail
        </Button>
      </form>
    </div>
  );
}
export default DrinksForm;
