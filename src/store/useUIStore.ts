import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  toggleMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMenu: () => set({ isMobileMenuOpen: false }),
}));
