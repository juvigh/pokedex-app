import React from 'react';
import PokemonCard from '../poke-card/poke-card.component';

interface PokemonListProps {
  pokemons: any[];
  onToggleFavorite: (pokemon: any) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onToggleFavorite }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h2>Lista de Pokémons</h2>
      <div className='flex flex-wrap gap-3'>
      {pokemons?.length > 0 ? (
        pokemons.map((pokemon, index) => (
          <PokemonCard 
            key={index} 
            pokemon={pokemon} 
            onToggleFavorite={onToggleFavorite} 
            isFavorited={false}
          />
        ))
      ) : (
        <p>Nenhum Pokémon na lista</p>
      )}
      </div>
    </div>
  );
};

export default PokemonList;
