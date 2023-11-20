import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { DetailCardPage, NotFoundPage } from '@/pages';

import { ROUTES } from './routes';

const { ROOT } = ROUTES;

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <DetailCardPage />,
        index: true,
      },
    ],
  },
]);
