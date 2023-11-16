import { Dispatch, FC, PropsWithChildren, createContext, useContext, useReducer } from 'react';

import { pokemonReducer } from '@/reducers/pokemon/reducer';
import type { PokemonAction, PokemonState } from '@/reducers/pokemon/types';

const PokemonContext = createContext<PokemonState>({});

const PokemonDispatchContext = createContext<Dispatch<PokemonAction>>(() => {});

export const PokemonProvider: FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, dispatch] = useReducer(pokemonReducer, {
    data: [],
    searchValue: '',
  });

  return (
    <PokemonContext.Provider value={pokemons}>
      <PokemonDispatchContext.Provider value={dispatch}>{children}</PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
export const usePokemonDispatch = () => useContext(PokemonDispatchContext);
