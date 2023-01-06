import { FC, useEffect, useReducer, useState } from "react";
import { UIContext, uiReducer } from "./";
import { isDarkMode, setDarkMode } from "../../utils";

export interface UIState {
  darkMode: boolean;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const UI_INITIAL_STATE: UIState = {
    darkMode: isDarkMode(),
  };

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const activateDarkMode = () => {
    dispatch({ type: "UI - Activate Dark Mode" });
    setDarkMode(true);
  };

  const deactivateDarkMode = () => {
    dispatch({ type: "UI - Deactivate Dark Mode" });
    setDarkMode(false);
  };

  if (!mounted) return null;

  return (
    <UIContext.Provider
      value={{
        ...state,

        activateDarkMode,
        deactivateDarkMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
