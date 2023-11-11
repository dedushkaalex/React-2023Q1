import { PokeCard } from '@api/modules/Pokemon/types';

export type PokemonAction = {
  type: string;
  payload: PokeCard[];
};

export type PokemonState = {
  searchValue: string;
  data: PokeCard[];
};
