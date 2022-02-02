import getPokemon from "./getPokemon";

const numberOfPokemon = 151;

const getAllPokemon = async () => {
  const pokeArray = [];
  for (let i = 1; i <= numberOfPokemon; i++) {
    const pokemon = await getPokemon(i);
    pokeArray.push(pokemon);
  }
  return pokeArray;
};

export default getAllPokemon;
