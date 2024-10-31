import React from 'react';
import { PokeApiPokemon } from '../../types';

interface PokemonCardProps {
  pokemon: PokeApiPokemon;
  onInsert?: () => void;
}

const PokemonApiCard: React.FC<PokemonCardProps> = ({ pokemon, onInsert }) => {
  return (
    <div className='card bg-gray-200 p-5 flex flex-col justify-center border'>
      <h1 className='text-center text-gray-600'>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className='bg-white rounded-md' />
      {onInsert && <button onClick={onInsert} className='bg-blue-500 text-white p-2 mt-2'>Inserir Pokemon</button>}
    </div>
  );
};

export default PokemonApiCard;
