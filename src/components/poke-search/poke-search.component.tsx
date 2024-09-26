import React, { useState } from 'react';

interface SearchPokemonProps {
  onSearch: (name: string) => void;
}

const SearchPokemon: React.FC<SearchPokemonProps> = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSearch = () => {
    if (name.trim()) {
      onSearch(name);
    } else {
      alert('Por favor, digite o nome de um Pokémon.');
    }
  };

  return (
    <div className='flex flex-col  gap-[8px]'>
      <button className='bg-gray-600 text-white p-2 rounded-xl' onClick={handleSearch}>Buscar Pokémon</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o nome do Pokémon"
      />
    </div>
  );
};

export default SearchPokemon;
