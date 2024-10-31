import React from 'react';
import { usePokemons } from './use-pokemons.hook';
import { usePokemonDetails } from './use-pokemon-details';
import { useFavoritedPokemons } from './use-favorited-pokemons.hook';
import { useInsertPokemon } from './use-insert-pokemon.hook';
import { PokeApiPokemon, Pokemon } from '../types';
import { deleteFavorite } from '../domain/favorite-pokemons/delete-favorite-pokemon.use-case';

const convertToPokemon = (pokeApiPokemon: PokeApiPokemon): Pokemon => {
  return {
    pokemon_id: pokeApiPokemon.id,
    pokemon_name: pokeApiPokemon.name,
    front_sprites: pokeApiPokemon.sprites.front_default,
  };
};

export const usePokemonApp = () => {
  const [name, setName] = React.useState('');
  const [isInsertPokemonError, setIsInsertPokemonError] = React.useState(false);
  const { data: pokemonsList, refetch: refetchPokemons, isLoadingPokemons } = usePokemons();
  const { favoritedPokemons, insertFavorite, isLoadingFavoritedPokemons, refetch: refetchFavorited } = useFavoritedPokemons();
  const { data: pokemon, isFetching, isError } = usePokemonDetails(name);
  const insertPokemonMutation = useInsertPokemon();

  const handleSearch = (searchName: string) => {
    setName(searchName);
    setIsInsertPokemonError(false);
  };

  const handleInsert = async () => {
    if (pokemon) {
      const formattedPokemon = convertToPokemon(pokemon);
      const isDuplicate = pokemonsList.some(
        (existingPokemon: any) => existingPokemon.pokemon_name === formattedPokemon.pokemon_name
      );
  
      if (isDuplicate) {
        setIsInsertPokemonError(true);
        return;
      }
      insertPokemonMutation.mutateAsync(formattedPokemon).then(() => {
        refetchPokemons();
      });

    }
  };

  const toggleFavorite = (pokemon: any) => {
    const isFavorited = favoritedPokemons.some((fav: any) => fav.pokemon_id === pokemon.id);
    if (isFavorited) {
      deleteFavorite(pokemon.id).then(() => refetchFavorited());
    } else {
      insertFavorite(pokemon.id);
    }
  };

  return {
    pokemon,
    pokemonsList,
    favoritedPokemons,
    isFetching,
    isLoadingFavoritedPokemons,
    isLoadingPokemons,
    isError,
    handleSearch,
    handleInsert,
    toggleFavorite,
    isInsertPokemonError
  };
};
