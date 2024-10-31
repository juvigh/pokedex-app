export type PokeApiPokemon = {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }
  
  export type Pokemon = {
    pokemon_id: number;
    pokemon_name: string;
    front_sprites: string;
  }
  
  export type PokemonList = {
    id: number;
    pokemon_id: number;
    pokemon: {
      front_sprites: string;
      id: number;
      pokemon_name: string;
    };
  }