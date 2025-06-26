import { create } from 'zustand';

interface MobileNavState {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  openDrawer: () => void;
}

export const useMobileNavStore = create<MobileNavState>((set) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  closeDrawer: () => set({ isDrawerOpen: false }),
  openDrawer: () => set({ isDrawerOpen: true }),
}));
