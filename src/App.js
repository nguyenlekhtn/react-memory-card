import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import "./App.css";

import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import CardGrid from "./components/CardGrid";
import { getPokemonData } from "./ultis";

const App = (props) => {
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardsArr, setClickedCardsArr] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  function handleCardClick(name) {
    playRound(name);
    setPokemons((prevArr) => shuffle(prevArr));
  }

  function playRound(name) {
    if (clickedCardsArr.includes(name)) {
      if (bestScore < clickedCardsArr.length) {
        setBestScore(clickedCardsArr.length);
      }
      reset();
    } else {
      setClickedCardsArr((prevArr) => [...prevArr, name]);
    }
  }

  function reset() {
    setClickedCardsArr([]);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonData();
      setPokemons(shuffle(data));
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <ScoreBoard bestScore={bestScore} currentScore={clickedCardsArr.length} />
      <div className="main">
        <CardGrid
          pokemons={pokemons}
          handleCardClick={handleCardClick}
        ></CardGrid>
      </div>
    </div>
  );
};

export default App;
