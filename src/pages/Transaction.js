import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useUiState } from "../store/ui.state";
import { transaction } from "../api/transaction";
import moment from "moment";

const Transaction = () => {
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    pageSize: 10,
    total: "0",
    page: 1,
  });

  const ui = useUiState();

  const postTransaction = async () => {
    setPageState((e) => ({ ...e, isLoading: true }));
    await transaction(pageState.pageSize, pageState.page).then((res) => {
      setPageState((e) => ({
        ...e,
        isLoading: false,
        data: res?.data?.payments,
        total: res?.data?.totalPayments,
      }));
    });
  };

  useEffect(() => {
    postTransaction();
  }, [pageState.pageSize, pageState.page]);

  return (
    <Box
      sx={{
        marginLeft: ui.drawerOpen ? 21 : 8,
      }}
    >
      <DataGrid
        autoHeight
        rows={pageState.data}
        rowCount={Number(pageState.total)}
        loading={pageState.isLoading}
        disableColumnMenu={true}
        page={pageState.page - 1}
        pagination
        paginationMode="server"
        pageSize={pageState.pageSize}
        onPageChange={(e) => {
          setPageState((o) => ({ ...o, page: e + 1 }));
        }}
        onPageSizeChange={(e) => setPageState((o) => ({ ...o, pageSize: e }))}
        rowsPerPageOptions={[10, 20, 30]}
        columns={columns}
      />
    </Box>
  );
};

export default Transaction;

const columns = [
  {
    field: "timestamp",
    headerName: "Date Time",
    width: 200,
    valueFormatter: (e) => {
      if (e.value) {
        return moment(e.value).format("Do MMM YYYY HH:MM:SS a");
      } else {
        return "N/A";
      }
    },
  },
  {
    field: "orderno",
    headerName: "Order No",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "cardNo",
    headerName: "Card No",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "paymentType",
    headerName: "Card Type",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "crew",
    headerName: "Crew",
    width: 200,
    valueFormatter: (params) => {
      return params?.value?.employeeName ?? "N/A";
    },
  },
  {
    field: "bookingInfo",
    headerName: "Passenger",
    width: 200,
    valueFormatter: (params) => {
      return params?.value?.customerName ?? "N/A";
    },
  },
  {
    field: "_1",
    headerName: "Phone No",
    width: 200,
    renderCell: (params) => {
      return params?.row?.bookingInfo?.mobile ?? "N/A";
    },
  },
];
