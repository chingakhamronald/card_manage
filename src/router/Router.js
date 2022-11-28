import Dashboard from "../pages/Dashboard";
import Transaction from "../pages/Transaction";

const MainRoutes = {
  path: "/",
  element: <Dashboard />,
  children: [
    {
      path: "transaction",
      element: <Transaction />,
    },
  ],
};

export default MainRoutes;
