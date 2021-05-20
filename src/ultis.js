import axios from "axios";
import { capitalize, range } from "lodash";
const START = 252;
const AMOUNT = 12;

async function getPokemonData() {
  try {
    const pokemons = await Promise.all(
      range(START, START + AMOUNT).map(async (key) => {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${key}`
        );
        console.log(data);
        const name = capitalize(data.name);
        const img = data.sprites.other["dream_world"].front_default;
        return { name, img };
      })
    );

    return pokemons;
  } catch (err) {
    console.error(err);
  }
}

export { getPokemonData };
