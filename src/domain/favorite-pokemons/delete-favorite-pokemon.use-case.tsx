import axios from "axios";
import { hasuraKey } from "../../providers";

export const deleteFavorite = async (pokemon_id: any) => {
  try {
    const { data } = await axios.post('https://pokemons-list.hasura.app/v1/graphql', {
      query: `
        mutation DeleteFavoritePokemon($pokemon_id: Int!) {
          delete_pokelist_favorite_pokemons(where: {pokemon_id: {_eq: $pokemon_id}}) {
            affected_rows
          }
        }
      `,
      variables: {
        pokemon_id
      }
    }, {
      headers: {
        'x-hasura-admin-secret': hasuraKey,
      }
    });

    return data;
  } catch (error) {
    console.error('Erro ao deletar Pokémon favorito:', error);
    throw error;
  }
};
