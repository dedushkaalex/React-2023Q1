import { configureStore } from '@reduxjs/toolkit';

import pokemonsReducer from './features/pokemon/pokemon-slice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
