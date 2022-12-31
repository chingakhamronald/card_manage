import create from "zustand";

export const useUiState = create((set) => ({
  drawerWidth: 199,
  drawerOpen: true,

  setDrawerOpen: (open) => set({ drawerOpen: open }),
}));
