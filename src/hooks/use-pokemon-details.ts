import { useQuery } from '@tanstack/react-query';
import { fetchPokemon } from '../domain/poke-api/get-pokemon-name.use-case';
import { PokeApiPokemon } from '../types';

export const usePokemonDetails = (name: string) => {
  return useQuery<PokeApiPokemon>({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemon(name),
    enabled: !!name,
    retry: false,
  });
};
