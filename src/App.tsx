import { Component } from 'react';
import Header from './views/Components/Header/Header';
import Form from './views/Components/Form/Form';
import Input from './views/Elements/Input/Input';
import Button from './views/Elements/Button/Button';
import PokemonApi from './api/modules/Pokemon/Pokemon';
import { PokeCard } from './api/modules/Pokemon/types';
import { LOCAL_STORAGE_POKEMON_SEARCH_QUERY } from './utils/constants/LocalStorage';
import PokemonList from './views/Containers/PokemonList/PokemonList';

type Props = Record<string, never>;

interface State {
  searchText: string;
  data: PokeCard[];
  isLoading: boolean;
}

export class App extends Component<Props, State> {
  private pokemonApi: PokemonApi;
  private localStorageSearchText: string | null;

  constructor(props: Props) {
    super(props);

    this.state = {
      searchText: '',
      data: [],
      isLoading: false,
    };

    this.pokemonApi = new PokemonApi({
      baseURL: 'https://api.pokemontcg.io/v2',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': '6024987a-904e-4cc3-965d-4eb7a26b3684',
      },
    });

    this.localStorageSearchText = localStorage.getItem(LOCAL_STORAGE_POKEMON_SEARCH_QUERY);
  }

  componentDidMount(): void {
    if (this.localStorageSearchText && this.localStorageSearchText.length > 0) {
      this.setState({
        searchText: this.localStorageSearchText,
      });
    }
  }

  private getFetchPokemons(searchValue: string) {
    this.pokemonApi.pokemons
      .get({
        pageSize: '10',
        q: `name:${searchValue.trim()}`,
      })
      .then((data) => {
        console.log(data);
        this.setState({ data: data.data });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  private searchPokemon() {
    const { searchText } = this.state;

    if (!searchText.trim().length) {
      return;
    }

    this.setState({ isLoading: true });

    if (this.localStorageSearchText && this.localStorageSearchText.length > 0) {
      this.getFetchPokemons(this.localStorageSearchText);
    } else {
      this.getFetchPokemons(searchText);
      localStorage.setItem(LOCAL_STORAGE_POKEMON_SEARCH_QUERY, searchText.trim());
    }
  }

  public render() {
    return (
      <div className="app">
        <Header>
          <Form
            handleSubmit={(e) => {
              e.preventDefault();
              this.searchPokemon();
            }}
          >
            <Input
              placeholder="Search"
              onChange={(e) => this.setState({ searchText: e.target.value })}
              value={this.state.searchText}
              autoFocus
            />
            <Button
              type="submit"
              loading={this.state.isLoading}
            >
              Get Pokemons
            </Button>
          </Form>
        </Header>
        <PokemonList
          data={this.state.data}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
