import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../domain/pokemon/get-pokemons.use-case-';
import { insertPokemon } from '../domain/pokemon/insert-pokemon.use-case';
import { fetchPokemon } from '../domain/poke-api/get-pokemon-name.use-case';

export const usePokemonApp = () => {
  const [name, setName] = React.useState('');
  const [pokemon, setPokemon] = React.useState<any>(null);
  const [pokemonsList, setPokemonsList] = React.useState<any[]>([]);
  const [favoritedPokemons, setFavoritedPokemons] = React.useState<any[]>(() => {
    const storedFavorites = localStorage.getItem('favoritedPokemons');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('favoritedPokemons', JSON.stringify(favoritedPokemons));
  }, [favoritedPokemons]);

  const { data, isFetching, isError } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemon(name),
    enabled: !!name,
    retry: false,
  });

  React.useEffect(() => {
    if (data) {
      setPokemon(data);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: async (pokemon: any) => {
      const response = await insertPokemon(pokemon);
      return response;
    },
    onSuccess: async () => {
      try {
        const updatedPokemons = await fetchPokemons();
        setPokemonsList(updatedPokemons);
      } catch (error) {
        console.error('Erro ao atualizar a lista de Pokémons:', error);
      }
    },
  });

  React.useEffect(() => {
    (async () => {
      try {
        const initialPokemons = await fetchPokemons();
        setPokemonsList(initialPokemons);
      } catch (error) {
        console.error('Erro ao buscar Pokémons iniciais:', error);
      }
    })();
  }, []);

  const handleSearch = (searchName: string) => {
    setName(searchName);
  };

  const handleInsert = () => {
    if (pokemon) {
      mutation.mutate(pokemon);
    }
  };

  const toggleFavorite = (pokemon: any) => {
    setFavoritedPokemons(prevFavorites => {
      const isFavorited = prevFavorites.some(p => p.name === pokemon.name);
      if (isFavorited) {
        return prevFavorites.filter(p => p.name !== pokemon.name);
      } else {
        return [...prevFavorites, pokemon];
      }
    });
  };

  return {
    pokemon,
    pokemonsList,
    favoritedPokemons,
    isFetching,
    isError,
    handleSearch,
    handleInsert,
    toggleFavorite,
  };
};
