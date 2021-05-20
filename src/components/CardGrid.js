import Card from "./Card";
import "./CardGrid.css";

export default function CardGrid(props) {
  const cards = props.pokemons.map((pokemon) => (
    <Card
      handleClick={props.handleCardClick}
      pokemon={pokemon}
      key={pokemon.name}
    />
  ));

  return <div className="cardGrid">{cards}</div>;
}
