import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Box>Dashboard</Box>
      <Outlet />
    </>
  );
};
export default Dashboard;
