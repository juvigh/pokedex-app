import PokemonList from './components/poke-list/poke-list.componet';
import FavoritedPokemons from './components/poke-list/poke-favorited-list.componet';
import SearchPokemon from './components/poke-search/poke-search.component';
import PokemonCard from './components/poke-card/poke-card.component';
import { usePokemonApp } from './hooks/use-pokemon-app.hook';

function App() {
  const {
    pokemon,
    pokemonsList,
    favoritedPokemons,
    isFetching,
    isError,
    handleSearch,
    handleInsert,
    toggleFavorite,
  } = usePokemonApp();

  return (
    <div className='border max-w-6xl mx-auto flex flex-col gap-[32px] p-8'>
      <div className='flex gap-8 justify-between'>
        <div className=''>
          <SearchPokemon onSearch={handleSearch} />

          {isFetching && <p>Carregando...</p>}
          {isError && <p>Erro: Pokémon não encontrado</p>}

          {pokemon && (
            <PokemonCard 
              pokemon={pokemon} 
              onInsert={handleInsert} 
              isFavorited={favoritedPokemons.some(p => p.name === pokemon.name)}
            />
          )}
        </div>
        <div className='w-2/3'>
          <PokemonList 
            pokemons={pokemonsList} 
            onToggleFavorite={toggleFavorite} 
          />
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <FavoritedPokemons 
          favoritedPokemons={favoritedPokemons} 
          onToggleFavorite={toggleFavorite} 
        />
      </div>
    </div>
  );
}


export default App;
