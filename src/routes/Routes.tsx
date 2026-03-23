import { createBrowserRouter } from 'react-router-dom'

import PageTemplate from '../PageTemplate'

import AetheriaMC from "../pages/AetheriaMC/AetheriaMC"
import Community from "../pages/Community/Community"
import Home from "../pages/Home/Home"
import SoftwareHouse from "../pages/SoftwareHouse/SoftwareHouse"

import AetheriaMCImg from "../assets/img/neogalaxylogo.png"
import CommunityImg from "../assets/img/neogalaxylogo.png"
import HomeImg from "../assets/img/neogalaxylogo.png"
import SoftwareHouseImg from "../assets/img/neogalaxylogo.png"


const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate children={<Home />} imgSrc={HomeImg} text="Il nostro ecosistema" />
  },
  {
    path: "/projects/aetheriamc",
    element: <PageTemplate children={<AetheriaMC />} imgSrc={AetheriaMCImg} text="Il nostro server minecraft" />
  },
  {
    path: "/projects/community",
    element: <PageTemplate children={<Community />} imgSrc={CommunityImg} text="La nostra gaming community" />
  },
  {
    path: "/projects/softwarehouse",
    element: <PageTemplate children={<SoftwareHouse />} imgSrc={SoftwareHouseImg} text="Da decidere" />
  },
]);

export default router;