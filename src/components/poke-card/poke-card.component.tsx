import React from 'react';
import { Pokemon } from '../../types';

interface PokemonCardProps {
  pokemon: Pokemon;
  onInsert?: () => void;
  onToggleFavorite?: (pokemon: any) => void;
  isFavorited?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onInsert, onToggleFavorite, isFavorited }) => {
  return (
    <div className='card bg-gray-200 p-5 flex flex-col justify-center gap-2'>
      <h1 className='text-center text-gray-600'>{pokemon.pokemon_name}</h1>
      <img src={pokemon.front_sprites} alt={pokemon.pokemon_name} className='bg-white rounded-md' />
      {onInsert && <button onClick={onInsert} className='bg-blue-500 text-white p-2'>Inserir Pokemon</button>}
      {onToggleFavorite && <button 
        onClick={() => onToggleFavorite(pokemon)} 
        className={`mt-2 p-2 ${isFavorited ? 'bg-red-500' : 'bg-gray-500'} text-white`}
      >
        {isFavorited ? 'Desfavoritar' : 'Favoritar'}
      </button>
      }
    </div>
  );
};

export default PokemonCard;
