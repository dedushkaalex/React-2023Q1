import { Component } from 'react';
import Header from './views/Components/Header/Header';
import Form from './views/Components/Form/Form';
import Input from './views/Elements/Input/Input';
import Button from './views/Elements/Button/Button';
import PokemonApi from './api/modules/Pokemon/Pokemon';
import { PokeCard } from './api/modules/Pokemon/types';

type Props = Record<string, never>;

interface State {
  searchText: string;
  data: PokeCard[];
  isLoading: boolean;
}

export class App extends Component<Props, State> {
  private pokemonApi: PokemonApi;
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
  }

  private searchPokemon() {
    const { searchText } = this.state;

    if (!searchText.trim().length) {
      return;
    }

    this.setState({ isLoading: true });

    this.pokemonApi.pokemons
      .get({
        q: `name:${searchText.trim()}`,
      })
      .finally(() => this.setState({ isLoading: false }));
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
      </div>
    );
  }
}

export default App;
