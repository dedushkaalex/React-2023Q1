import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <p>layout</p>,
    path: '/',
    children: [
      {
        index: true,
        element: <p>Auth</p>,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
