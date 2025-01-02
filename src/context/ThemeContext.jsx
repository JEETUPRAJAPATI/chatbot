import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: { bg: 'bg-gray-50', text: 'text-gray-900' },
  lavender: { bg: 'bg-purple-50', text: 'text-gray-900' },
  mint: { bg: 'bg-green-50', text: 'text-gray-900' },
  peach: { bg: 'bg-orange-50', text: 'text-gray-900' },
  sky: { bg: 'bg-blue-50', text: 'text-gray-900' },
  rose: { bg: 'bg-pink-50', text: 'text-gray-900' },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.default);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}