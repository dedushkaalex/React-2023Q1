import { AppRouter } from './providers/router';
import { StoreProvider } from './providers/store-provider/ui/StoreProvider';

export const App = () => {
  return (
    <div className='app'>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
};
