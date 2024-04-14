import React, { createContext, useState, useContext } from 'react';

// Define themes
const themes = {
  light: {
    background: '#ffffff',
    text: '#333333',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
};

// Create context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  // Toggle theme function
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume theme context
export const useTheme = () => useContext(ThemeContext);
