import axios from "axios";
import { hasuraKey } from "../../providers";

export const insertFavoritePokemon = async (pokemonId: any) => {
    const response = await axios.post('https://pokemons-list.hasura.app/v1/graphql', {
        query: `
        mutation InserirPokemonFavorito($pokemon_id: Int!) {
          insert_pokelist_favorite_pokemons(objects: {pokemon_id: $pokemon_id}) {
            returning {
              id
              pokemon_id
              pokemon {
                front_sprites
                pokemon_name
              }
            }
          }
        }
      `,
        variables: {
            pokemon_id: pokemonId,
        },
    }, {
        headers: {
            'x-hasura-admin-secret': hasuraKey,
        }
    });
    return response.data;
};