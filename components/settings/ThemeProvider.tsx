"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "rgb(243,247,251)",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("rgb(243,247,251)");

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    // Update only the main content background
    document.documentElement.style.setProperty("--theme-background", newTheme);
  };

  // Initialize theme on mount
  useEffect(() => {
    handleThemeChange(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);