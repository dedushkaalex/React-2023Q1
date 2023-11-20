import { PokeCard } from '@api/Pokemon/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface State {
  pokemons: PokeCard[];
  loading: boolean;
}

const initialState: State = {
  pokemons: [],
  loading: false,
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
