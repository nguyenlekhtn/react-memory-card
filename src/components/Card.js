import "./Card.scss";

export default function Card(props) {
  const { data, handleCardClick } = props;

  return (
    <div className="card" onClick={(e) => handleCardClick(data.name)}>
      <img src={props.data.img} alt={props.data.name} />
      <span>{props.data.name}</span>
    </div>
  );
}
