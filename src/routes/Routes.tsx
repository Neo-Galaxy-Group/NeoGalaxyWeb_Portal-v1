import { createBrowserRouter } from 'react-router-dom'

import PageTemplate from '../PageTemplate'

import AetheriaMC from "../pages/AetheriaMC/AetheriaMC"
import Community from "../pages/Community/Community"
import Home from "../pages/Home/Home"
import SoftwareHouse from "../pages/SoftwareHouse/SoftwareHouse"

import AetheriaMCImg from "../assets/img/aetheriamc_logo.png"
import CommunityImg from "../assets/img/community_logo.png"
import HomeImg from "../assets/img/ecosystem_logo.png"
import SoftwareHouseImg from "../assets/img/softwarehouse_logo.png"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate children={<Home />} imgSrc={HomeImg} textKey="Components.Card.Headers.homeTitle" />
  },
  {
    path: "/projects/aetheriamc",
    element: <PageTemplate children={<AetheriaMC />} imgSrc={AetheriaMCImg} textKey="Components.Card.Headers.aetheriaTitle" />
  },
  {
    path: "/projects/community",
    element: <PageTemplate children={<Community />} imgSrc={CommunityImg} textKey="Components.Card.Headers.communityTitle" />
  },
  {
    path: "/projects/softwarehouse",
    element: <PageTemplate children={<SoftwareHouse />} imgSrc={SoftwareHouseImg} textKey="Components.Card.Headers.softwareHouseTitle" />
  },
  {
    path: "*",
    element: <PageTemplate children={<Home />} imgSrc={HomeImg} textKey="Components.Card.Headers.homeTitle" />
  },
]);

export default router;