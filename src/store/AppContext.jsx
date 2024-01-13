import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create a custom hook to use the context
export const useStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useStore must be used within a ThemeProvider");
  }
  return context;
};

// Create the provider
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
