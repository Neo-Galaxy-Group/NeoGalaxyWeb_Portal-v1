import { createBrowserRouter } from 'react-router-dom';

import PageTemplate from '../PageTemplate';

import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate content={Home}/>, // Questo farà da Layout (deve contenere <Outlet />)
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