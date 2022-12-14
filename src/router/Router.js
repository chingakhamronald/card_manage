import Transaction from "../pages/Transaction";
import Drawer from "../components/index";

const MainRoutes = {
  path: "/",
  element: <Drawer />,
  children: [
    {
      path: "transaction",
      element: <Transaction />,
    },
  ],
};

export default MainRoutes;
