import React from 'react';
import PokemonCard from '../poke-card/poke-card.component';

interface FavoritedPokemonsProps {
  favoritedPokemons: any[];
}

const FavoritedPokemons: React.FC<FavoritedPokemonsProps> = ({ favoritedPokemons }) => {
  console.log(favoritedPokemons);
  return (
    <div className='favorited-pokemons flex flex-col gap-2'>
      <h2>Pokémons Favoritados</h2>
      <div className='flex flex-wrap gap-3'>
      {favoritedPokemons.length > 0 ? (
        favoritedPokemons.map((pokemon, index) => (
          <PokemonCard 
            key={index} 
            pokemon={pokemon.pokemon} 
          />
        ))
      ) : (
        <p>Nenhum Pokémon favoritado</p>
      )}
      </div>
    </div>
  );
};

export default FavoritedPokemons;
