import React from 'react';
import PokemonCard from '../poke-card/poke-card.component';

interface PokemonListProps {
  pokemons: any[];
  onToggleFavorite: (pokemon: any) => void;
  favoritedPokemons: any[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onToggleFavorite, favoritedPokemons }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h2>Lista de Pokémons</h2>
      <div className='flex flex-wrap gap-3'>
      {pokemons?.length > 0 ? (
          pokemons.map((pokemon, index) => {
            const isFavorited = favoritedPokemons.some(fav => fav.pokemon_id === pokemon.id);
            return (
              <PokemonCard 
                key={index} 
                pokemon={pokemon} 
                onToggleFavorite={onToggleFavorite} 
                isFavorited={isFavorited}
              />
            );
          })
        ) : (
          <p>Nenhum Pokémon na lista</p>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
