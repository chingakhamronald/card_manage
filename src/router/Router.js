import Transaction from "../pages/Transaction";
import Drawer from "../components/index";
import Monthly from "../pages/Monthly";

const MainRoutes = {
  path: "/",
  element: <Drawer />,
  children: [
    {
      path: "transaction",
      element: <Transaction />,
    },
    {
      path: "monthly",
      element: <Monthly/>
    }
  ],
};

export default MainRoutes;
