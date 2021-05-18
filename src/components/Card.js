import "./Card.scss";

export default function Card(props) {
  const {
    data,
    clickedCardsArr,
    setClickedCardsArr,
    bestScore,
    setBestScore,
    shuffle,
  } = props;

  const handleCardClick = (name) => {
    console.log(clickedCardsArr);
    if (clickedCardsArr.includes(name)) {
      console.log("included");
      if (bestScore < clickedCardsArr.length) {
        setBestScore(clickedCardsArr.length);
      }
      setClickedCardsArr([]);
    } else {
      setClickedCardsArr((prevArr) => [...prevArr, name]);
    }
    shuffle();
  };

  return (
    <div className="card" onClick={(e) => handleCardClick(data.name)}>
      <img src={props.data.img} alt={props.data.name} />
      <span>{props.data.name}</span>
    </div>
  );
}
