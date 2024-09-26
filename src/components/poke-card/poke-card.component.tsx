import React from 'react';

interface PokemonCardProps {
  pokemon: any;
  onInsert?: () => void;
  onToggleFavorite?: (pokemon: any) => void;
  isFavorited?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onInsert, onToggleFavorite, isFavorited }) => {
  return (
    <div className='card bg-gray-200 p-5 flex flex-col justify-center border'>
      <h1 className='text-center text-gray-600'>{pokemon.pokemon_name ?? pokemon.name}</h1>
      <img src={pokemon.front_sprites ?? pokemon.sprites.front_default} alt={pokemon.pokemon_name} className='bg-white rounded-md' />
      {onInsert && <button onClick={onInsert} className='bg-blue-500 text-white p-2 mt-2'>Inserir Pokemon</button>}
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
