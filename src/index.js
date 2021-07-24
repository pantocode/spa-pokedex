//import PokemonEntity from 'PokemonEntity';

//const pokemon = new PokemonEntity();
const pokeName = document.getElementById('poke-name');
const pokeImg = document.getElementById('poke-img');
const pokeId = document.getElementById('poke-id');
const pokeCard = document.getElementById('pokecard');

const typesColors = {
    bug: "#3d9950",
    dark: "#5a5b79",
    fire: "##c72d3b",
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
    default: "#9eafb6"
}

const poke = window.pokeSearch.addEventListener('change', async () => {
    const id = window.pokeSearch.value;
    pokemon = await fetchPokemon(id);
    renderPokemon(pokemon);
    window.pokeSearch.value="";
    console.log(pokemon);
    return pokemon;
});

function renderPokemon(pokemon){
    pokeImg.setAttribute('src', pokemon.sprites.front_default);
    pokeName.textContent = pokemon.name;
    pokeId.textContent = pokemon.id;
    const types = pokemon.types;
    setCardColor(types);
}


function setCardColor(types) {
    const typeColor1 = typesColors[types[0].type.name];
    const typeColor2 = types[1]
                            ? typesColors[types[1].type.name]
                            : typesColors.default;
    pokeCard.style.borderColor = `${typeColor1}`;
    pokeName.style.backgroundColor = `${typeColor1}`;
    pokeId.style.color = `${typeColor1}`;
}

async function fetchPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json();
    return data;
}



