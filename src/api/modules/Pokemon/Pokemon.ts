import { HttpClientOptions } from '@api/HttpApi';
import HttpClient from '@api/HttpApi/httpApi';

class PokemonApi extends HttpClient {
  constructor({ baseURL, headers }: HttpClientOptions) {
    super({
      baseURL,
      headers,
    });
  }

  public get pokemons() {
    return {
      get: (queryParams?: Record<string, string>, options: RequestInit = {}) =>
        this.get('/cards', options, queryParams),
      getById: (id: string, queryParams?: Record<string, string>, options: RequestInit = {}) =>
        this.get(`/cards/${id}`, options, queryParams),
    };
  }
}

export const pokemonApi = new PokemonApi({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': '6024987a-904e-4cc3-965d-4eb7a26b3684',
  },
});
