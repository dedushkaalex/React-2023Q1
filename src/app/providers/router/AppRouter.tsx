import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RegisterPage } from '@/pages/register-page';
import { RootLayout } from '@/pages/root-layout';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: '/',
    children: [
      {
        path: 'ref_form',
        element: <RegisterPage />,
      },
      {
        path: 'control_form',
        element: <p>Control Form</p>,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
