import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { FetchPokemonResponse } from './types';

//this.get(`/cards/${id}`, options, queryParams),
// this.get('/cards', options, queryParams),

const POKEMON_BASE_URL = 'https://api.pokemontcg.io/v2/cards';

export const pokemonApiService = createApi({
  tagTypes: ['Pokemons'],

  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: POKEMON_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': '6024987a-904e-4cc3-965d-4eb7a26b3684',
    },
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<FetchPokemonResponse, string>({
      query: (pokemonName = '') => `${POKEMON_BASE_URL}?name:${pokemonName.trim()}*`,
      providesTags: ['Pokemons'],
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApiService;
