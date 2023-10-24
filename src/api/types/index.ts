export interface Stat {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stats: Stat[];
}

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string | null;
  };
  species: {
    name: string;
    url: string;
  };
  stats: Stats[];
}

export interface PokemonOne {
  name: string;
  url: string;
}

export interface AllPokemons {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonOne[];
}
