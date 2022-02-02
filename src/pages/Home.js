import getAllPokemon from "../utils/getAllPokemon";

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

const Home = async () => {
  const pokemons = await getAllPokemon();
  const view = `
    <section class="pokemon__cards">
        ${pokemons
          .map(
            (pokemon) => `
            <div class="pokemon__card pokemon__card--type-${
              pokemon.types[0].type.name
            }">
							<a href = "#/${pokemon.id}">

								<p class="pokemon__id"># ${pokemon.id.toString().padStart(3, "0")}</p>
								<div class="pokemon__img-container">
									<img  src="${pokemon.sprites.front_default}" alt="">
								</div>
								<h3 class="pokemon___name">${pokemon.name}</h3>
								<div class = "pokemon__types-container">
									<span class = "pokemon__type--${pokemon.types[0].type.name} ">${
              pokemon.types[0].type.name
            }</span>
									${
                    pokemon.types[1]
                      ? `<span class = "pokemon__type--${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>`
                      : ""
                  }
								</div>
							</a>
            </div>    
        `,
          )
          .join("")}
    </section>
    `;
  return view;
};

export default Home;
