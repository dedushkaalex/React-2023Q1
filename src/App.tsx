import { Component } from 'react';
import Header from './views/Components/Header/Header';
import Form from './views/Components/Form/Form';
import Input from './views/Elements/Input/Input';
import Button from './views/Elements/Button/Button';
import PokemonApi from './api/modules/Pokemon/Pokemon';

type Props = Record<string, never>;

export class App extends Component<Props> {
  private pokemonApi: PokemonApi;
  constructor(props: Props) {
    super(props);
    this.pokemonApi = new PokemonApi({
      baseURL: 'https://api.pokemontcg.io/v2',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': '6024987a-904e-4cc3-965d-4eb7a26b3684',
      },
    });
  }

  public componentDidMount(): void {
    // this.pokemonApi.get('/cards');
    this.pokemonApi.pokemons.get();
  }

  public render() {
    return (
      <div className="app">
        <Header>
          <Form
            handleSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <Input
              placeholder="Search"
              onChange={() => null}
              value=""
            />
            <Button>Найти</Button>
          </Form>
        </Header>
      </div>
    );
  }
}

export default App;
