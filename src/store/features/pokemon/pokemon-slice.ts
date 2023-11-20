import { PokeCard } from '@api/Pokemon/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface State {
  pokemons: PokeCard[];
  loadingMainPage: boolean;
  loadingDetailPage: boolean;
}

const initialState: State = {
  pokemons: [],
  loadingMainPage: false,
  loadingDetailPage: false,
};

export const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<PokeCard[]>) => {
      state.pokemons = action.payload;
    },
  },
});

export const { addPokemons } = PokemonsSlice.actions;
export default PokemonsSlice.reducer;
