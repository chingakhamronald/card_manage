import { Box } from "@mui/system";
import React from "react";
import { useUiState } from "../store/ui.state";
import { DataGrid } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";

const Crew = () => {
  const ui = useUiState();

  const createData = () => {
    return {
      id: faker.datatype.uuid(),
      crewName: faker.name.fullName(),
    };
  };

  const fakerData = () => {
    return new Array(100).fill(undefined).map(createData);
  };

  return (
    <Box
      sx={{
        marginLeft: ui.drawerOpen ? 26 : 9,
      }}
    >
      <DataGrid
        pagination
        autoHeight
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableColumnMenu={true}
      />
    </Box>
  );
};

export default Crew;
