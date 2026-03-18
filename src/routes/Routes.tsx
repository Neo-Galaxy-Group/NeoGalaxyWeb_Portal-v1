import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Questo farà da Layout (deve contenere <Outlet />)
    /*
    children: [
      {
        index: true, // Rotta di default quando sei su "/"
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
    */
  },
  /*
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
  */
]);

export default router;