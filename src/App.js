import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Main from "./container/Main";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#313135",
        paper: "#313135",
      },
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
