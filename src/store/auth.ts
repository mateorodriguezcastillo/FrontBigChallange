import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserLight } from "../../interfaces/submission";

interface State {
  token: string;
  user: UserLight | null;
}

interface Actions {
  setToken: (token: string) => void;
  setUser: (user: UserLight | null) => void;
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
      setUser: (user: UserLight | null) =>
        set((state) => ({
          user,
        })),
    }),
    {
      name: "auth",
    }
  )
);
