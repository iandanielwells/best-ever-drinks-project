import React from "react";

function DrinksForm() {

return (
    <div className="drinks-form">
    <h2>Build Your Own Drink!</h2>
    <form>
      <input type="text" name="name" placeholder="Drink Name" />
      <input type="text" name="image" placeholder="Cocktail Image" />
      <input type="text" name="instructions" placeholder="Instructions" />
      <input type="text" name="ingredients" placeholder="Ingredients" />
      <button type="submit">Add CockTail</button>
    </form>
  </div>
)
}
export default DrinksForm;
