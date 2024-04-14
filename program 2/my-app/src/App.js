import React from 'react';
import { ThemeProvider } from './Component/ThemeContext';
import UserForm from './Component/UserForm';
import Header from './Component/Header';
import ThemeSwitcher from './Component/ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <ThemeSwitcher />
      <UserForm />
    </ThemeProvider>
  );
};

export default App;
