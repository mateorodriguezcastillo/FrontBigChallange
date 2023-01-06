import { UIState } from "./";

type UIActionType =
  | { type: "UI - Activate Dark Mode" }
  | { type: "UI - Deactivate Dark Mode" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Activate Dark Mode":
      return { ...state, darkMode: true };
    case "UI - Deactivate Dark Mode":
      return { ...state, darkMode: false };
    default:
      return state;
  }
};
