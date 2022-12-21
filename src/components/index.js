import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { TopBar } from "./AppBar";
import { SideDrawer } from "./SideDrawer";

const index = () => {
  return (
    <>
      <TopBar />
      <Box sx={{ display: "flex", flex: 1 }}>
        <SideDrawer />
      </Box>
      <Outlet />
    </>
  );
};

export default index;
