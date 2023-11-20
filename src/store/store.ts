import { pokemonApiService } from '@api/Pokemon';
import { configureStore } from '@reduxjs/toolkit';

import pokemonsReducer from './features/pokemon/pokemon-slice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    [pokemonApiService.reducerPath]: pokemonApiService.reducer,
  },
  devTools: true, // Defaults to true.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
