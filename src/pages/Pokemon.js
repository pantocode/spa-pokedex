import getHash from "../utils/getHash";
import getPokemon from "../utils/getPokemon";

const Pokemon = async () => {
  const id = getHash();
  const pokemon = await getPokemon(id);
  const view = `
        <div class="pokemon__inner-container pokemon__card--type-${
          pokemon.types[0].type.name
        }">
            <article class="pokemon__inner-card ">
              <h3 class ="pokemon__inner-name">${pokemon.name}</h3>
              <div class="pokemon__inner-img">
                <img src="${pokemon.sprites.front_default}" alt="${
    pokemon.name
  }">
              </div>
              <article class="pokemon__info">
                <h3 >ID: </h3> <p>#${pokemon.id.toString().padStart(3, "0")}</p>
                <h3>Height: </h3> <p>${pokemon.height}</p>
                <h3>Weight: </h3> <p>${pokemon.weight}</p>
                <h3>Abilities: </h3> <p>${pokemon.abilities[0].ability.name}</p>
                <h3>Abilities: </h3> <p>${pokemon.abilities.map(
                  (ability) => `<span> ${ability.ability.name}</span>`,
                )}</p>
                <h3>Moves: </h3> <article class = "pokemon__inner-types">
                <span class = "pokemon__type--${pokemon.types[0].type.name} ">${
    pokemon.types[0].type.name
  }</span>
                ${
                  pokemon.types[1]
                    ? `<span class = "pokemon__type--${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>`
                    : ""
                }
                </article>
              </article>                
            </article>
        </div>
    `;
  return view;
};

export default Pokemon;
