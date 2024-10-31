import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchFavoritedPokemons } from '../domain/favorite-pokemons/get-favorite-pokemon.use-case';
import { insertFavoritePokemon } from '../domain/favorite-pokemons/insert-favorite-pokemon.use-case';

export const useFavoritedPokemons = () => {
  const { data, refetch, isLoading: isLoadingFavoritedPokemons, } = useQuery({
    queryKey: ['favoritedPokemons'],
    queryFn: fetchFavoritedPokemons,
    retry: false,
  });

  const mutation = useMutation({
    mutationFn: insertFavoritePokemon,
    onSuccess: () => {
      refetch();
    },
  });

  return {
    favoritedPokemons: data ?? data?.pokelist_favorite_pokemons ?? [],
    insertFavorite: mutation.mutate,
    isLoadingFavoritedPokemons,
    refetch,
  };
};
