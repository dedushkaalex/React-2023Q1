import { createBrowserRouter } from 'react-router-dom';

import { PokemonProvider } from '@/contexts/pokemon-context';
import { Layout } from '@/layouts/Layout';
import { DetailCardPage, NotFoundPage } from '@/pages';

import { ROUTES } from './routes';

const { ROOT } = ROUTES;

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <PokemonProvider>
        <Layout />
      </PokemonProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <DetailCardPage />,
        index: true,
      },
    ],
  },
]);
