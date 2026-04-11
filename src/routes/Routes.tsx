import { createBrowserRouter } from 'react-router-dom'

import PageTemplate from '../PageTemplate'

import AetheriaMC from "../pages/AetheriaMC"
import Community from "../pages/Community"
import Home from "../pages/Home"
import NotFoundPage from "../pages/404"
import SoftwareHouse from "../pages/SoftwareHouse"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate children={<Home />} imgSrc="/assets/img/ecosystem_logo.png" textKey="Components.Card.Headers.homeTitle" />
  },
  {
    path: "/projects/aetheriamc",
    element: <PageTemplate children={<AetheriaMC />} imgSrc="/assets/img/aetheriamc_logo.png" textKey="Components.Card.Headers.aetheriaTitle" />
  },
  {
    path: "/projects/community",
    element: <PageTemplate children={<Community />} imgSrc="/assets/img/community_logo.png" textKey="Components.Card.Headers.communityTitle" />
  },
  {
    path: "/projects/softwarehouse",
    element: <PageTemplate children={<SoftwareHouse />} imgSrc="/assets/img/softwarehouse_logo.png" textKey="Components.Card.Headers.softwareHouseTitle" />
  },
  {
    path: "*",
    element: <PageTemplate children={<NotFoundPage />} imgSrc="/assets/img/ecosystem_logo.png" textKey="Components.Card.Headers.404Title" />
  },
]);

export default router;