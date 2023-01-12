import { styled } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useUiState } from "../store/ui.state";
import { Link } from "react-router-dom";

export const TopBar = () => {
  const ui = useUiState();

  return (
    <AppBar
      position="sticky"
      open={ui.drawerOpen}
      width={ui.drawerWidth}
      sx={{ display: "flex", flexGrow: 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{
            marginRight: 5,
            ...(ui.drawerOpen && { display: "none" }),
          }}
          onClick={() => ui.setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Card Management
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, width }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: width,
    width: `calc(100% - ${width}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
