function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item).default;
  });
  return images;
}

const images = importAll(
  require.context("./assets/", false, /\.(png|jpe?g|svg)$/)
);

const POKEMON = (() => {
  console.log(images["1.png"]);

  return [
    {
      img: images["1.png"],
      name: "Bulbasaur",
    },
    {
      img: images["2.png"],
      name: "Ivysaur",
    },
    {
      img: images["3.png"],
      name: "Venusaur",
    },
    {
      img: images["4.png"],
      name: "	Charmander",
    },
    {
      img: images["5.png"],
      name: "Charmeleon",
    },
    {
      img: images["6.png"],
      name: "	Charizard",
    },
    {
      img: images["7.png"],
      name: "Squirtle",
    },
    {
      img: images["8.png"],
      name: "Wartortle",
    },
    {
      img: images["9.png"],
      name: "Blastoise",
    },
    {
      img: images["10.png"],
      name: "Caterpie",
    },
    {
      img: images["11.png"],
      name: "Metapod",
    },
    {
      img: images["12.png"],
      name: "Butterfree",
    },
    // {
    //   img: images["13.png"],
    //   name: "Weedle",
    // },
    // {
    //   img: images["14.png"],
    //   name: "Kakuna",
    // },
    // {
    //   img: images["15.png"],
    //   name: "Beedrill",
    // },
    // {
    //   img: images["16.png"],
    //   name: "Pidgey",
    // },
  ];
})();

export default POKEMON;
