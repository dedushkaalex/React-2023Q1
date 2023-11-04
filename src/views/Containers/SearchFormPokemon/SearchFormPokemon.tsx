// import styles from './SearchFormPokemon.module.css'
import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';

import { LOCAL_STORAGE_POKEMON_SEARCH_QUERY } from '@/utils/constants/LocalStorage';

import { localStorageWrapper as storage } from '@api/LocalStorageApi';
import { pokemonApi } from '@api/modules/Pokemon';
import { FetchPokemonResponse, PokeCard } from '@api/modules/Pokemon/types';
import { Button } from '@views/Elements/Button';
import { Input } from '@views/Elements/Input';

export const SearchFormPokemon = () => {
  const localStorageSearchTextValue = storage.get<string>(LOCAL_STORAGE_POKEMON_SEARCH_QUERY) || '';

  const [searchText, setSearchText] = useState(localStorageSearchTextValue);
  const [dataPokemons, setDataPokemons] = useState<PokeCard[]>([]);
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
    <Form
      handleSubmit={(e) => {
        e.preventDefault();
        searchPokemon();
      }}
    >
      <Input
        placeholder={'Search'}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        autoFocus
      />
      <Button
        type={'submit'}
        loading={isLoading}
      >
        Get Pokemons
      </Button>
    </Form>
  );
};
