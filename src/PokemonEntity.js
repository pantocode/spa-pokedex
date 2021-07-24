class PokemonEntity {
    constructor({
        name,
        id,
        sprites,
        types = [],
    }){
        this.name = name;
        this.id = id;
        this.sprites = sprites;
        this.types = types;
    }

    get name() {
        return this.name;
    }

    set name(pokeName) {
        this.name = pokeName;
    }

    get id(){
        return this.id;
    }

    set id(pokeId){
        this.id = pokeId;
    }

    get sprites(){
        return this.sprites;
    }

    set sprites(pokeSprites){
        this.sprites = pokeSprites;
    }

    get types(){
        return this.types;
    }

    set types(type){
        this.types = type;
    }
}

export default PokemonEntity;