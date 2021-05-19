import { useEffect, useState } from "react";
import _ from "lodash";
import "./App.css";

import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import CardGrid from "./components/CardGrid";
import Card from "./components/Card";

import data from "./POKEMON";

const App = (props) => {
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardsArr, setClickedCardsArr] = useState([]);
  // const [lastClicked, setLastClicked] = useState("");

  let cards = data.map((card) => (
    <Card data={card} key={card.name} handleCardClick={handleCardClick} />
  ));
  const [cardsArr, setCardsArr] = useState(_.shuffle(cards));

  function handleCardClick(name) {
    setClickedCardsArr((prevArr) => [...prevArr, name]);
    setCardsArr((prevArr) => _.shuffle(prevArr));
  }

  useEffect(() => {
    const startingArr = clickedCardsArr.slice(0, clickedCardsArr.length - 1);
    const lastValue = clickedCardsArr[clickedCardsArr.length - 1];
    if (startingArr.includes(lastValue)) {
      if (bestScore < startingArr.length) {
        setBestScore(startingArr.length);
      }
      setClickedCardsArr([]);
    }
  }, [bestScore, clickedCardsArr, setClickedCardsArr]);

  return (
    <div className="app">
      <Header />
      <ScoreBoard bestScore={bestScore} currentScore={clickedCardsArr.length} />
      <div className="main">
        <CardGrid>{cardsArr}</CardGrid>
      </div>
    </div>
  );
};

export default App;
