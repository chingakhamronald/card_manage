import create from "zustand";

export const useUiState = create((set) => ({
  drawerWidth: 172,
  drawerOpen: true,

  setDrawerOpen: (open) => set({ drawerOpen: open }),
}));
