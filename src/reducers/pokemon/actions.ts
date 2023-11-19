import { PokeCard } from '@api/Pokemon/types';

import { PokemonAction } from './types';

export const ADD_POKEMONS = 'ADD_POKEMONS';
export const SAVE_SEARCH_VALUE = 'SAVE_SEARCH_VALUE';

/*
 * Action Creators
 */

export const addPokemons = (payload: PokeCard[]): PokemonAction => ({
  type: ADD_POKEMONS,
  data: payload,
});

export const setSearchValue = (payload: string): PokemonAction => ({
  type: ADD_POKEMONS,
  searchValue: payload,
});
