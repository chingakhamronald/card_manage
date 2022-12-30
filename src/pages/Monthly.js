import { Box, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  DatePicker,
  LocalizationProvider,
  AdapterDayjs,
} from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { monthly } from "../api/monthly";
import { useUiState } from "../store/ui.state";

export default function Monthly() {
  const ui = useUiState();
  const [value, setValue] = useState();

  useEffect(() => {
    monthly();
  }, []);

  return (
    <Box
      sx={{
        marginLeft: ui.drawerOpen ? 21 : 8,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <DataGrid columns={columns} autoHeight rows={row} />
    </Box>
  );
}

const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 200,
  },
  {
    field: "merchantName",
    headerName: "Merchant Name",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "merchantCity",
    headerName: "Merchant City",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
];

const row = [{ id: 1, merchantName: "Test", merchantCity: "Singjamei" }];
