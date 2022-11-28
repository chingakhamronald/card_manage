import { useRoutes } from "react-router-dom";
import MainRoutes from "./Router";

export const Routes = () => {
  return useRoutes([MainRoutes]);
};
