import create from "zustand";

export const useUiState = create((set) => ({
  drawerWidth: 184,
  drawerOpen: true,

  setDrawerOpen: (open) => set({ drawerOpen: open }),
}));
