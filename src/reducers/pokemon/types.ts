import { PokeCard } from '@api/modules/Pokemon/types';

export type PokemonAction = {
  type: string;
  data?: PokeCard[];
  searchValue?: string;
};

export type PokemonState = {
  searchValue?: string;
  data?: PokeCard[];
};
