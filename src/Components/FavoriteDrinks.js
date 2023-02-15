import DrinksCard from "./DrinksCard";

function FavoriteDrinks({ drinks, search, setDrinks }) {
  const filteredDrinks = drinks.filter((drink) => {
    const nameSearch = drink.name.toLowerCase();
    const filteredDrinks = drink.ingredients.map((ingredient) => {
      return ingredient.toLowerCase();
    });

    return (
      nameSearch.includes(search.toLowerCase()) ||
      filteredDrinks.toString().includes(search.toLowerCase())
    );
  });

  return (
    <ul className="cards">
      {filteredDrinks.map((drink) => {
        return drink.favorite ? (
          <DrinksCard {...drink} key={drink.id} setDrinks={setDrinks} />
        ) : (
          ""
        );
      })}
    </ul>
  );
}

export default FavoriteDrinks;
