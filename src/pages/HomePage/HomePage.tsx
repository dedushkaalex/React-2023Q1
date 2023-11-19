/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useFetch } from '@/hooks/useFetch';
import { addPokemons } from '@/reducers/pokemon/actions';
import { LOCAL_STORAGE_POKEMON_SEARCH_QUERY } from '@/utils/constants/LocalStorage';

import { localStorageWrapper as storage } from '@api/LocalStorageApi';
import { useGetPokemonsQuery } from '@api/Pokemon';
import type { FetchPokemonResponse } from '@api/Pokemon/types';
import { Paginator } from '@views/Containers/Paginator/Paginator';
import { PokemonList } from '@views/Containers/PokemonList';
import { SearchFormPokemon } from '@views/Containers/SearchFormPokemon/SearchFormPokemon';

import styles from './HomePage.module.css';

export const HomePage = () => {
  const localStorageSearchTextValue = storage.get<string>(LOCAL_STORAGE_POKEMON_SEARCH_QUERY) || '';
  const [searchText, setSearchText] = useState(localStorageSearchTextValue);
  const { data = [], isFetching, isLoading } = useGetPokemonsQuery(searchText);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get('page');
  // const maxPage = useRef(1);

  // useEffect(() => {
  //   getFetchPokemons(searchText);
  // }, [pageParams]);

  // const getFetchPokemons = (searchValue?: string) => {
  //   pokemonApi.pokemons
  //     .get({
  //       pageSize: '10',
  //       q: searchValue ? `name:${searchValue.trim()}*` : '',
  //       page: searchParams.get('page') ?? '1',
  //     })
  //     .then((data: FetchPokemonResponse) => {
  //       setDataPokemons(data);
  //       dispatch(addPokemons(data.data));
  //       setSearchParams({ page: String(data.page) });
  //       maxPage.current = Math.ceil(data.totalCount / data.pageSize);
  //     });
  //   // .catch(() => null)
  // };

  const handleSearchPokemon = () => {
    if (!searchText.trim().length) {
      return;
    }

    if (searchText.trim() !== storage.get<string>(LOCAL_STORAGE_POKEMON_SEARCH_QUERY)) {
      // getFetchPokemons(searchText);
      storage.set(LOCAL_STORAGE_POKEMON_SEARCH_QUERY, searchText.trim());
    }
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <SearchFormPokemon
          onSearch={handleSearchPokemon}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
          value={searchText}
          isLoading={isFetching}
        />
        {/* <Paginator
          className={styles.pagination__bar}
          currentPage={Number(pageParams)}
          // totalCount={data.totalCount || 0}
          onPageChange={(pageNum) => {
            setSearchParams({ page: String(pageNum) });
          }}
          pageSize={10}
        /> */}
      </div>

      <PokemonList isLoading={isFetching} />
    </div>
  );
};
