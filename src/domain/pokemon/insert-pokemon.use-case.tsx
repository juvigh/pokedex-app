import axios from "axios";
import { hasuraKey } from "../../providers";

export const insertPokemon = async (pokemon: any) => {
    const response = await axios.post('https://pokemons-list.hasura.app/v1/graphql', {
        query: `
        mutation InserirPokemon($pokemon_name: String!, $front_sprites: String!) {
          insert_pokemons_pokemon(objects: {pokemon_name: $pokemon_name, front_sprites: $front_sprites}) {
            returning {
              pokemon_name
              front_sprites
              id
            }
          }
        }
      `,
        variables: {
            pokemon_name: pokemon.name,
            front_sprites: pokemon.sprites.front_default,
        },
    }, {
        headers: {
            'x-hasura-admin-secret': hasuraKey,
        }
    });
    return response.data;
};