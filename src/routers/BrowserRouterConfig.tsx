import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { DetailCardPage } from '@/pages/DetailCardPage/DetailCardPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
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
