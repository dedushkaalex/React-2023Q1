// import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './providers/router';

// import { router } from './routers/BrowserRouterConfig';

export const App = () => {
  return (
    <div className='app'>
      <AppRouter />
    </div>
  );
};
