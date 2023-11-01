import { useEffect, useState } from 'react';
import Header from './views/Components/Header/Header';
import Form from './views/Components/Form/Form';
import { Input } from './views/Elements/Input/Input';
import { Button } from './views/Elements/Button/Button';
import PokemonApi from './api/modules/Pokemon/Pokemon';
import { FetchPokemonResponse, PokeCard } from './api/modules/Pokemon/types';
import { LOCAL_STORAGE_POKEMON_SEARCH_QUERY } from './utils/constants/LocalStorage';
import { PokemonList } from './views/Containers/PokemonList/PokemonList';
const pokemonApi = new PokemonApi({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': '6024987a-904e-4cc3-965d-4eb7a26b3684',
  },
});

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [dataPokemons, setDataPokemons] = useState<PokeCard[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const localStorageSearchText = localStorage.getItem(LOCAL_STORAGE_POKEMON_SEARCH_QUERY);

    if (localStorageSearchText && localStorageSearchText.length > 0) {
      setSearchText(localStorageSearchText);
      getFetchPokemons(localStorageSearchText);
    } else {
      getFetchPokemons('');
    }
  }, []);

  const localStorageSearchText = localStorage.getItem(LOCAL_STORAGE_POKEMON_SEARCH_QUERY);

  const getFetchPokemons = (searchValue?: string) => {
    setIsLoading(true);
    pokemonApi.pokemons
      .get({
        pageSize: '10',
        q: searchValue ? `name:${searchValue.trim()}*` : '',
      })
      .then((data: FetchPokemonResponse) => {
        setDataPokemons(data.data);
      })
      // .catch(() => null)
      .finally(() => setIsLoading(false));
  };

  const searchPokemon = () => {
    if (!searchText.trim().length) {
      return;
    }

    if (searchText.trim() !== localStorageSearchText) {
      getFetchPokemons(searchText);
      localStorage.setItem(LOCAL_STORAGE_POKEMON_SEARCH_QUERY, searchText.trim());
    }
  };

  // componentDidUpdate(): void {
  //   this.localStorageSearchText = localStorage.getItem(LOCAL_STORAGE_POKEMON_SEARCH_QUERY);
  // }

  return (
    <div className="app">
      <Header>
        <Form
          handleSubmit={(e) => {
            e.preventDefault();
            searchPokemon();
          }}
        >
          <Input
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            autoFocus
          />
          <Button
            type="submit"
            loading={isLoading}
          >
            Get Pokemons
          </Button>
        </Form>
      </Header>
      <PokemonList
        data={dataPokemons}
        isLoading={isLoading}
      />
    </div>
  );
};
