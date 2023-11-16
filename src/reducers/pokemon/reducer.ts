import { ADD_POKEMONS, SAVE_SEARCH_VALUE } from './actions';
import { PokemonAction, PokemonState } from './types';

export const pokemonReducer = (state: PokemonState, action: PokemonAction): PokemonState => {
  const { type } = action;

  switch (type) {
    case ADD_POKEMONS: {
      return {
        ...state,
        data: action.data,
      };
    }
    case SAVE_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.searchValue,
      };
    }
  }

  throw new Error('Unknown action: ' + action.type);
};
