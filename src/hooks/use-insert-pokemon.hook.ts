import { useMutation } from '@tanstack/react-query';
import { insertPokemon } from '../domain/pokemon/insert-pokemon.use-case';
import { Pokemon } from '../types';

export const useInsertPokemon = () => {
  const mutation = useMutation({
    mutationFn: async (pokemon: Pokemon) => {
      const response = await insertPokemon(pokemon);
      return response;
    },

    onError: (error) => {
      console.error('Erro ao inserir Pokémon:', error);
    },
  });

  return mutation;
};
