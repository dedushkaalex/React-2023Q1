import HttpClient, { HttpClientOptions } from '../../HttpApi/httpApi';

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
      get: () => this.get('/cards'),
    };
  }
}

export default PokemonApi;
