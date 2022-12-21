import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useUiState } from "../store/ui.state";

const Transaction = () => {
  const ui = useUiState();

  const columns = [
    { field: "firstName", headerName: "First name" },
    { field: "lastName", headerName: "Last name" },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon" },
    { id: 2, lastName: "Lannister", firstName: "Cersei" },
    { id: 3, lastName: "Lannister", firstName: "Jaimehhhhhhhhhhhhhhhhhhhhh" },
    { id: 4, lastName: "Stark", firstName: "Arya" },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 500,
        marginLeft: ui.drawerOpen ? 23 : 8,
      }}
    >
      <DataGrid rows={rows} columns={columns} disableColumnMenu={true} />
    </Box>
  );
};

export default Transaction;
