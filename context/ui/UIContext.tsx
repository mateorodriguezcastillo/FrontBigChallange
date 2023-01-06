import { createContext } from "react";

interface UIContextProps {
  darkMode: boolean;

  activateDarkMode: () => void;
  deactivateDarkMode: () => void;
}

export const UIContext = createContext({} as UIContextProps);
