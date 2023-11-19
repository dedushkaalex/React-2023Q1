import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { DetailCardPage, NotFoundPage } from '@/pages';

import { pokemonApiSlice } from '@api/Pokemon';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { ROUTES } from './routes';

const { ROOT } = ROUTES;

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ApiProvider api={pokemonApiSlice}>
        <Layout />
      </ApiProvider>
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
