import PokemonList from './components/poke-list/poke-list.componet';
import FavoritedPokemons from './components/poke-list/poke-favorited-list.componet';
import SearchPokemon from './components/poke-search/poke-search.component';
import { usePokemonApp } from './hooks/use-pokemon-app.hook';
import PokemonApiCard from './components/poke-card/poke-api-card.component';

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
    isLoadingFavoritedPokemons,
    isLoadingPokemons,
    isInsertPokemonError
  } = usePokemonApp();

  return (
    <div className='border max-w-6xl mx-auto flex flex-col gap-[32px] p-8'>
      <div className='flex gap-8 justify-between'>
        <div className='w-1/5'>
          <SearchPokemon onSearch={handleSearch} />

          {isFetching && <p>Carregando...</p>}
          {isError && <p>Erro: Pokémon não encontrado</p>}

          {pokemon && (
            <PokemonApiCard
              pokemon={pokemon} 
              onInsert={handleInsert} 
            />
          )}
          {isInsertPokemonError && (
            <p>Erro: Esse pokemon já existe na lista</p>
          )}
        </div>
        <div className='w-2/3'>
        {isLoadingPokemons && <p>Carregando...</p>}
        {pokemonsList && (
          <PokemonList 
            pokemons={pokemonsList} 
            onToggleFavorite={toggleFavorite}
            favoritedPokemons={favoritedPokemons} 
          />  
        )}
        
        </div>
      </div>
      <div className='flex justify-center w-full'>
        {isLoadingFavoritedPokemons && <p>Carregando...</p>}
        {favoritedPokemons && (        
        <FavoritedPokemons 
          favoritedPokemons={favoritedPokemons}  
        />
        )}
      </div>
    </div>
  );
}


export default App;
