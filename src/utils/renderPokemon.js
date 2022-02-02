const pokeName = document.getElementById("poke-name");
const pokeId = document.getElementById("poke-id");
const pokeCard = document.getElementById("pokecard");

const typesColors = {
  bug: "#3d9950",
  dark: "#5a5b79",
  fire: "#c72d3b",
  dragon: "#60ccd8",
  electric: "#e8e12e",
  fairy: "#eb1469",
  fighting: "#f0603b",
  flying: "#95b1c9",
  ghost: "#906791",
  grass: "#25cb52",
  ground: "#6d4a1c",
  ice: "#e0effc",
  normal: "#cb98a7",
  poison: "#9e69db",
  psychic: "#f61c94",
  rock: "#894025",
  steel: "#40bf94",
  water: "#85a8fa",
  default: "#9eafb6",
};

const renderPokemon = (pokemon) => {
  const types = pokemon.types;
  `<div class="pokemon__card" id= "pokecard">
		<p id="poke-id"># ${pokemon.id}</p>
		<a href = "#/${pokemon.id}" class="pokemon__card--name">
			<p id="poke-name">${pokemon.name}</p>
		</a>
		<span class = "poke__type">${pokemon.types[0].type.name}</span>
		<span class = "poke__type">${
      pokemon.types[1] ? pokemon.types[1].type.name : ""
    }</span>
		<img id="poke-img" src="${pokemon.sprites.front_default}" alt="">
	</div> 
	`;
  setCardColor(types);
};

function setCardColor(types) {
  const typeColor1 = typesColors[types[0].type.name];
  const typeColor2 = types[1]
    ? typesColors[types[1].type.name]
    : typesColors.default;
  pokeCard.style.borderColor = `${typeColor1}`;
  pokeName.style.backgroundColor = `${typeColor1}`;
  pokeId.style.color = `${typeColor1}`;
}

export default renderPokemon;
