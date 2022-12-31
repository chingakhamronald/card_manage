import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { monthly } from "../api/monthly";
import { useUiState } from "../store/ui.state";

export default function Mswipe() {
  const ui = useUiState();
  const [value, setValue] = useState({
    data: [],
    isLoading: false,
    total: 0,
    pageSize: 50,
    page: 1,
  });

  const monthlyData = async () => {
    setValue((e) => ({ ...e, isLoading: true }));
    await monthly(value.pageSize, value.page).then((res) => {
      setValue((e) => ({
        ...e,
        isLoading: false,
        data: res?.data?.monthlyData,
        total: res?.data?.totalMonthlyData,
      }));
    });
  };

  useEffect(() => {
    monthlyData();
  }, [value.pageSize, value.page]);

  return (
    <Box
      sx={{
        marginLeft: ui.drawerOpen ? 24 : 8,
      }}
    >
      <DataGrid
        autoHeight
        rows={value?.data}
        rowCount={Number(value.total)}
        loading={value.isLoading}
        disableColumnMenu={true}
        page={value.page - 1}
        pagination
        paginationMode="server"
        pageSize={value?.pageSize}
        onPageChange={(e) => {
          setValue((o) => ({ ...o, page: e + 1 }));
        }}
        onPageSizeChange={(e) => setValue((o) => ({ ...o, pageSize: e }))}
        rowsPerPageOptions={[50, 100]}
        columns={columns}
      />
    </Box>
  );
}

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "refno",
    headerName: "Ref No",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
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
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "dateTime",
    headerName: "Date",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "bookingInfo",
    headerName: "Customer Name",
    width: 350,
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
  {
    field: "_2",
    headerName: "Seat Number",
    width: 150,
    renderCell: (params) => {
      return params?.row?.bookingInfo?.seatNumber ?? "N/A";
    },
  },
  {
    field: "_3",
    headerName: "PNR",
    width: 150,
    renderCell: (params) => {
      return params?.row?.bookingInfo?.pnr ?? "N/A";
    },
  },
  {
    field: "crew",
    headerName: "Crew Name",
    width: 300,
    valueFormatter: (params) => {
      return params?.value?.employeeName ?? "N/A";
    },
  },
  {
    field: "_4",
    headerName: "Crew Id",
    width: 300,
    renderCell: (params) => {
      return params?.row?.crew?.employeeId ?? "N/A";
    },
  },
  {
    field: "_5",
    headerName: "Crew Code",
    width: 300,
    renderCell: (params) => {
      return params?.row?.crew?.employeeCode ?? "N/A";
    },
  },

  {
    field: "sessionId",
    headerName: "Session Id",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },

  {
    field: "flightNumber",
    headerName: "Flight Number",
    width: 150,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    width: 150,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "date",
    headerName: "Order Date",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "orderno",
    headerName: "Order Number",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "mId",
    headerName: "MID",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "tId",
    headerName: "TID",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "custDeviceId",
    headerName: "Cust Device Id",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "tipAmount",
    headerName: "Tip Amount",
    width: 150,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "cardNo",
    headerName: "Card Number",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "txType",
    headerName: "Tx Type",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "tsStatus",
    headerName: "Ts Status",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "authNo",
    headerName: "Auth No",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "rrNo",
    headerName: "RR Number",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "crType",
    headerName: "CR Type",
    width: 150,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "batchNo",
    headerName: "Batch Number",
    width: 150,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "batchTotal",
    headerName: "Batch Total",
    width: 150,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "loginId",
    headerName: "Login Id",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "cardHolderMobile",
    headerName: "Card Holder Mobile",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "cardHolderName",
    headerName: "Card Holder Name",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "cardTxnType",
    headerName: "Card Txn Type",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },

  {
    field: "notes",
    headerName: "Notes",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "applicationNo",
    headerName: "Application Number",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "folioNo",
    headerName: "Folio NUmber",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "schemaType",
    headerName: "Schema Type",
    width: 200,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "subFundName",
    headerName: "SubFund Name",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "clientId",
    headerName: "Client Id",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote1",
    headerName: "Extra Note 1",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote2",
    headerName: "Extra Note 2",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote3",
    headerName: "Extra Note 3",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote4",
    headerName: "Extra Note 4",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote5",
    headerName: "Extra Note 5",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote6",
    headerName: "Extra Note 6",
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote7",
    headerName: "Extra Note 7",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote8",
    headerName: "Extra Note 8",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote9",
    headerName: "Extra Note 9",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
  {
    field: "extraNote10",
    headerName: "Extra Note 10",
    width: 300,
    valueFormatter: (e) => {
      return e.value ?? "N/A";
    },
  },
];
