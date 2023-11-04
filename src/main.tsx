import ReactDOM from 'react-dom/client';

import { App } from './App';
import { PokemonContext } from './context/pokemon/PokemonContext';
import './styles/global.css';
import ErrorBoundary from './views/Components/ErrorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <PokemonContext.Provider value={{ isLoading: false, pokemonData: [] }}>
      <App />
    </PokemonContext.Provider>
  </ErrorBoundary>
);
