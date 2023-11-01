import { HttpClientOptions } from '@api/HttpApi';
import HttpClient from '@api/HttpApi/httpApi';

export class PokemonApi extends HttpClient {
  protected baseURL = '';
  constructor(options: HttpClientOptions) {
    super({
      baseURL: options.baseURL,
      headers: options.headers,
    });
  }

  public get pokemons() {
    return {
      get: (queryParams?: Record<string, string>, options: RequestInit = {}) =>
        this.get('/cards', options, queryParams),
    };
  }
}
