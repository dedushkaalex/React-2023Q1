import React, { Component } from 'react';
import Header from './components/Header/Header';

interface State {
  searchText: string;
}

interface Props {}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.currentTarget.value,
    });
    console.log(this.state.searchText);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(2);
  };

  public render() {
    return (
      <div className="app">
        <Header onChange={this.onChange} value={this.state.searchText} onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
