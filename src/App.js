import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import CardGrid from "./components/CardGrid";
import Card from "./components/Card";

import data from "./POKEMON";

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = { ...array[currentIndex] };
    array[currentIndex] = { ...array[randomIndex] };
    array[randomIndex] = { ...temporaryValue };
  }

  return array;
};

const App = (props) => {
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardsArr, setClickedCardsArr] = useState([]);
  // const [lastClicked, setLastClicked] = useState("");

  let cards = shuffle(
    data.map((card) => (
      <Card
        data={card}
        key={card.name}
        bestScore={bestScore}
        setBestScore={setBestScore}
        clickedCardsArr={clickedCardsArr}
        setClickedCardsArr={setClickedCardsArr}
        shuffle={() => shuffle(cards)}
      />
    ))
  );

  const [cardsArr, setCardsArr] = useState(cards);

  return (
    <div className="app">
      <Header />
      <ScoreBoard bestScore={bestScore} currentScore={clickedCardsArr.length} />
      <div className="main">
        <CardGrid>{cards}</CardGrid>
      </div>
    </div>
  );
};

export default App;
