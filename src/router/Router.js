import Drawer from "../components/index";
import Crew from "../pages/Crew";

const MainRoutes = {
  path: "/",
  element: <Drawer />,
  children: [
    {
      path: "crew",
      element: <Crew />,
    },
  ],
};

export default MainRoutes;
