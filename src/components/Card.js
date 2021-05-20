import "./Card.scss";

export default function Card(props) {
  const { pokemon, handleClick } = props;

  return (
    <div className="card" onClick={() => handleClick(pokemon.name)}>
      <img src={pokemon.img} alt={pokemon.name} />
      <span>{pokemon.name}</span>
    </div>
  );
}
