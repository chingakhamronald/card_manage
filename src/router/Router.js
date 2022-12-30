import Transaction from "../pages/Transaction";
import Drawer from "../components/index";
import Mswipe from "../pages/Mswipe";

const MainRoutes = {
  path: "/",
  element: <Drawer />,
  children: [
    {
      path: "mswipe",
      element: <Mswipe />,
    },
  ],
};

export default MainRoutes;
