import React, { Component } from 'react';
import MainPage from './pages/MainPage/MainPage';

interface State {
  searchText: string;
  isLoading: boolean;
}

type Props = Record<string, never>;

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
      isLoading: false,
    };
  }

  private onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.currentTarget.value,
    });
  };

  public render() {
    return (
      <div className="app">
        <MainPage />
      </div>
    );
  }
}

export default App;
