import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Main from "./container/Main";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#313135" },
      // mode: "light",
      // background: {
      //   default: "#313135",
      //   paper: "#313135",
      // },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
