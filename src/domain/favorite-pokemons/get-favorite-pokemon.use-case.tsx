import axios from "axios";
import { hasuraKey } from "../../providers";

export const fetchFavoritedPokemons = async () => {
    try {
      const { data } = await axios.post('https://pokemons-list.hasura.app/v1/graphql', {
        query: `
          query FavoritedPokemons {
             pokelist_favorite_pokemons {
             id
             pokemon_id
             pokemon {
                front_sprites
                id
                pokemon_name
            }
        }
    }
        `,
      }, {
        headers: {
          'x-hasura-admin-secret': hasuraKey,
        }
      });
      return data?.data?.pokelist_favorite_pokemons;
    } catch (error) {
      console.error('Erro ao buscar Pokémons:', error);
      throw error;
    }
  };