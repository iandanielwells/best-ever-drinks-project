function DrinksCard({ name, image, instructions, ingredients }) {
    return (
      <>
        <li className="card">
          <img src={image} alt={name} width={200} />
          <h4>{name}</h4>
          <p width={200}>{instructions}</p>
          <h3>Ingredients:</h3>
          {ingredients.map((ingredient) => {
            return <p>{ingredient}</p>;
          })}
        </li>{" "}
      </>
    );
  }
  export default DrinksCard;
  
  
  
  
  
  
  