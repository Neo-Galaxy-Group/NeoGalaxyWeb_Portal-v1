import { createBrowserRouter } from 'react-router-dom'

import PageTemplate from '../PageTemplate'
import Home from "../pages/Home"

import AetheriaMC from "../pages/AetheriaMC"
import Community from "../pages/Community"
import SoftwareHouse from "../pages/SoftwareHouse"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate content={<Home />}/>
  },
  {
    path: "/projects/aetheriamc",
    element: <PageTemplate content={<AetheriaMC />}/>
  },
  {
    path: "/projects/community",
    element: <PageTemplate content={<Community />}/>
  },
  {
    path: "/projects/softwarehouse",
    element: <PageTemplate content={<SoftwareHouse />}/>
  },
]);

export default router;