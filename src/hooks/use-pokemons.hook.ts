import { useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../domain/pokemon/get-pokemons.use-case-';

export const usePokemons = () => {
  const { data, isLoading: isLoadingPokemons, refetch } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
    retry: false,
  });

  return {
    data,
    isLoadingPokemons,
    refetch,
  };
};
