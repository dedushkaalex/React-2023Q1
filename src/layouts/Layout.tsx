/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from 'react-router-dom';

import { Header } from '@views/Components/Header';
import { PokemonList } from '@views/Containers/PokemonList';

export const Layout = () => {
  return (
    <div className={'app'}>
      <Header />

      <main className={'main'}>
        <div className={'split left'}>
          <PokemonList />
        </div>
        <div className={'split right'}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
