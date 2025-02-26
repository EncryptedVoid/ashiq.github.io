// src/hooks/useTheme.js
import { useState, useEffect, useContext, createContext } from 'react';
import { usePrefersDarkMode } from './useMedia';

// Create a context for the theme
const ThemeContext = createContext({
  isDarkMode: true, // Default to dark mode
  toggleTheme: () => {},
  theme: 'dark'
});

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = usePrefersDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // Update theme when system preference changes
  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Theme value to provide
  const themeValue = {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export default useTheme;