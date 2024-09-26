import axios from "axios";
import { hasuraKey } from "../../providers";

export const fetchPokemons = async () => {
    try {
      const { data } = await axios.post('https://pokemons-list.hasura.app/v1/graphql', {
        query: `
          query Pokemons {
            pokemons_pokemon {
              pokemon_name
              front_sprites
              id
            }
          }
        `,
      }, {
        headers: {
          'x-hasura-admin-secret': hasuraKey,
        }
      });
      return data.data.pokemons_pokemon;
    } catch (error) {
      console.error('Erro ao buscar Pokémons:', error);
      throw error;
    }
  };