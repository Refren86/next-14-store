import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  userRole: "guest",
  setUser: (user: any) => set({ user }),
  setUserRole: (role: "admin" | "customer") => set({ userRole: role }),
}));
