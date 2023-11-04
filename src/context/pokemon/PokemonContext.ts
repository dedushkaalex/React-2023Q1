import { createContext } from 'react';

import { PokeCard } from '@api/modules/Pokemon/types';

type PokemonDataContextType = {
  pokemonData: PokeCard[];
  isLoading: boolean;
};

export const initialState = {
  pokemonData: [],
  isLoading: false,
};

export const PokemonContext = createContext<PokemonDataContextType>(initialState);
