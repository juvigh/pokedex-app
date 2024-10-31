import axios from "axios";
import { hasuraKey } from "../../providers";
import { Pokemon } from "../../types";

export const insertPokemon = async (pokemon: Pokemon) => {
    const response = await axios.post('https://pokemons-list.hasura.app/v1/graphql', {
        query: `
        mutation InserirPokemon($pokemon_name: String!, $front_sprites: String!) {
          insert_pokelist_pokemon(objects: {pokemon_name: $pokemon_name, front_sprites: $front_sprites}) {
            returning {
              pokemon_name
              front_sprites
              id
            }
          }
        }
      `,
        variables: {
            pokemon_name: pokemon.pokemon_name,
            front_sprites: pokemon.front_sprites,
        },
    }, {
        headers: {
            'x-hasura-admin-secret': hasuraKey,
        }
    });
    return response.data;
};