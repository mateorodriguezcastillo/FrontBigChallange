export const setDarkMode = (darkMode: boolean) => {
  localStorage.setItem("darkMode", darkMode ? "1" : "0");
};

export const isDarkMode = () => {
  let isDarkMode = false;
  if (typeof window !== "undefined") {
    isDarkMode = localStorage.getItem("darkMode") === "1";
  }
  return isDarkMode;
};
