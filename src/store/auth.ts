import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../../interfaces/submission";

interface State {
  token: string;
  user: User | null;
}

interface Actions {
  setToken: (token: string) => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      user: null,
      setToken: (token: string) =>
        set((state) => ({
          token,
        })),
      setUser: (user: User | null) =>
        set((state) => ({
          user,
        })),
    }),
    {
      name: "auth",
    }
  )
);
