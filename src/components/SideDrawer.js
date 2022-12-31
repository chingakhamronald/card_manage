import { styled } from "@mui/material/styles";
import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useUiState } from "../store/ui.state";
import { useNavigate } from "react-router-dom";
import PaidIcon from "@mui/icons-material/Paid";
import DateRangeIcon from "@mui/icons-material/DateRange";

export const SideDrawer = () => {
  const ui = useUiState();
  const navigate = useNavigate();

  return (
    <>
      <Drawer width={ui.drawerWidth} open={ui.drawerOpen} variant="permanent">
        <DrawerHeader>
          <IconButton onClick={() => ui.setDrawerOpen(false)}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* <ListItemButton>
            <ListItemIcon>
              <Tooltip title="Transaction" placement="right">
                <IconButton>
                  <PaidIcon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="Transaction" />
          </ListItemButton> */}
          <ListItemButton onClick={() => navigate("/mswipe")}>
            <ListItemIcon>
              <Tooltip title="Mswipe" placement="right">
                <IconButton>
                  <DateRangeIcon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="Mswipe Record" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, width }) => ({
  width: width,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme, width) => ({
  width: width,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
