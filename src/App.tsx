import React, { Component } from 'react';
import Header from './components/Header/Header';
import axios, { AxiosResponse } from 'axios';
import { Pokemon } from './api/types';
import { PokeCard } from './components/PokeCard/PokeCard';

interface State {
  searchText: string;
  pokemonData: Pokemon | null;
  isLoading: boolean;
}

interface Props {}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
      pokemonData: null,
      isLoading: false,
    };
  }

  private onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.currentTarget.value,
    });
  };

  private searchPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((response: AxiosResponse) => {
      this.setState({
        pokemonData: response.data,
      });
    });
  };

  public render() {
    console.log(this.state.pokemonData);
    return (
      <div className="app">
        <Header
          onChange={this.onChange}
          value={this.state.searchText}
          onClick={this.searchPokemons}
        />
        <div className="content">
          {this.state.pokemonData && (
            <PokeCard
              key={this.state.pokemonData!.name}
              name={this.state.pokemonData!.name}
              stats={this.state.pokemonData!.stats}
              species={this.state.pokemonData!.species}
              sprites={this.state.pokemonData!.sprites}
            />
          )}
        </div>
        {this.state.isLoading && <h3>Loading...</h3>}
      </div>
    );
  }
}

export default App;
