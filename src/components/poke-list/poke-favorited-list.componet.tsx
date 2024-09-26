import React from 'react';
import PokemonCard from '../poke-card/poke-card.component';

interface FavoritedPokemonsProps {
  favoritedPokemons: any[];
  onToggleFavorite: (pokemon: any) => void;
}

const FavoritedPokemons: React.FC<FavoritedPokemonsProps> = ({ favoritedPokemons, onToggleFavorite }) => {
  return (
    <div className='favorited-pokemons flex flex-col p-6'>
      <h2>Pokémons Favoritados</h2>
      {favoritedPokemons.length > 0 ? (
        favoritedPokemons.map((pokemon, index) => (
          <PokemonCard 
            key={index} 
            pokemon={pokemon} 
            onToggleFavorite={onToggleFavorite} 
            isFavorited={true}
          />
        ))
      ) : (
        <p>Nenhum Pokémon favoritado</p>
      )}
    </div>
  );
};

export default FavoritedPokemons;
