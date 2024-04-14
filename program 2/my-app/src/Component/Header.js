// Header.js

import React from 'react';
import { useTheme } from './ThemeContext';

import "./Header.css"
const Header = () => {
  const { currentTheme, themes } = useTheme();

  return (
    <header className="header" style={{ background: themes[currentTheme].background, color: themes[currentTheme].text }}>
      <h1>My App</h1>
    </header>
  );
};

export default Header;
