import Reactgit from "react";

function DrinksCard({
  name,
  image,
  instructions,
  ingredients,
  favorite,
  id,
  setDrinks,
}) {
  function handleClick() {
    const newFavorite = { favorite: !favorite };

    fetch(`http://localhost:3000/cocktails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavorite),
    })
      .then((res) => res.json())
      .then((updated) => {
        setDrinks((prev) =>
          prev.map((drink) => {
            if (drink.id === id) {
              return updated;
            } else {
              return drink;
            }
          })
        );
      });
  }

  return (
    <>
      <li className="card">
        <img className="drinks-img" src={image} alt={name} width={200} />
        <h4 className="drink-name">{name}</h4>
        <p className="dark">{instructions}</p>
        <h3 className="dark">Ingredients:</h3>
        {ingredients.map((ingredient) => {
          return <p className="dark">{ingredient}</p>;
        })}

        <p className="favorite-text">
          {" "}
          FAVORITE ? {"  "}
          {favorite ? (
            <img
              alt="full-drink"
              onClick={handleClick}
              className="drinkImage"
              src="https://img.icons8.com/dusk/500/null/cocktail.png"
            />
          ) : (
            <img
              alt="empty-drink"
              onClick={handleClick}
              className="drinkImage"
              src="https://img.icons8.com/wired/500/null/cocktail.png"
            />
          )}{" "}
        </p>
      </li>
    </>
  );
}
export default DrinksCard;
