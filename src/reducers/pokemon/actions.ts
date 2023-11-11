import { PokeCard } from '@api/modules/Pokemon/types';

import { PokemonAction } from './types';

/*
 * Action types
 */

export const ADD_POKEMONS = 'ADD_POKEMONS';

/*
 * Action Creators
 */

export const addPokemons = (payload: PokeCard[]): PokemonAction => ({
  type: ADD_POKEMONS,
  payload,
});
