import ReactDOM from 'react-dom/client';

import { App } from './App';
import './styles/global.css';
import ErrorBoundary from './views/Components/ErrorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
