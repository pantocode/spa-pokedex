const API = "https://pokeapi.co/api/v2/pokemon/";

const getPokemon = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Pokemon fetch error", error);
  }
};

export default getPokemon;
