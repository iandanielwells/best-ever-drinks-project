function DrinksCard({ name, image, instructions, ingredients }) {
  return (
    <>
      <li className="card">
        <img src={image} alt={name} width={200} />
        <h4 className="drink-name">{name}</h4>
        <p width={200} className="dark">
          {instructions}
        </p>
        <h3 className="dark">Ingredients:</h3>
        {ingredients.map((ingredient) => {
          return <p className="dark">{ingredient}</p>;
        })}
      </li>
    </>
  );
}
export default DrinksCard;
