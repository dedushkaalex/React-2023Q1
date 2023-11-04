import { useEffect, useState } from 'react';

import { localStorageWrapper as storage } from '@api/LocalStorageApi';
import { PokemonApi } from '@api/modules/Pokemon';
import { FetchPokemonResponse, PokeCard } from '@api/modules/Pokemon/types';
import { Form } from '@views/Components/Form';
import { Header } from '@views/Components/Header';
import { PokemonList } from '@views/Containers/PokemonList';
import { Button } from '@views/Elements/Button';
import { Input } from '@views/Elements/Input';

import { LOCAL_STORAGE_POKEMON_SEARCH_QUERY } from './utils/constants/LocalStorage';

const pokemonApi = new PokemonApi({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': '6024987a-904e-4cc3-965d-4eb7a26b3684',
  },
});

export const App = () => {
  const [searchText, setSearchText] = useState(
    () => storage.get<string>(LOCAL_STORAGE_POKEMON_SEARCH_QUERY) || ''
  );
  const [dataPokemons, setDataPokemons] = useState<PokeCard[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFetchPokemons(searchText);
  }, []);

  const getFetchPokemons = (searchValue?: string) => {
    setIsLoading(true);
    pokemonApi.pokemons
      .get({
        pageSize: '10',
        q: searchValue ? `name:${searchValue.trim()}*` : '',
      })
      .then((data: FetchPokemonResponse) => {
        setDataPokemons(data?.data);
      })
      // .catch(() => null)
      .finally(() => setIsLoading(false));
  };

  const searchPokemon = () => {
    if (!searchText.trim().length) {
      return;
    }

    if (searchText.trim() !== storage.get<string>(LOCAL_STORAGE_POKEMON_SEARCH_QUERY)) {
      getFetchPokemons(searchText);
      storage.set(LOCAL_STORAGE_POKEMON_SEARCH_QUERY, searchText.trim());
    }
  };

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
