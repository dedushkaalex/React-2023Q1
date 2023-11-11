// import { Dispatch, FC, PropsWithChildren, createContext, useContext, useReducer } from 'react';

// import { pokemonReducer } from '@/reducers/pokemon/reducer';
// import { PokemonAction } from '@/reducers/pokemon/types';

// import { PokeCard } from '@api/modules/Pokemon/types';

// const PokemonContext = createContext<PokeCard[]>([]);

// const PokemonDispatchContext = createContext<Dispatch<PokemonAction>>(() => {});

// export const PokemonProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [pokemons, dispatch] = useReducer(pokemonReducer, []);

//   return (
//     <PokemonContext.Provider value={pokemons}>
//       <PokemonDispatchContext.Provider value={dispatch}>{children}</PokemonDispatchContext.Provider>
//     </PokemonContext.Provider>
//   );
// };

// export const usePokemon = () => useContext(PokemonContext);
// export const usePokemonDispatch = () => useContext(PokemonDispatchContext);
