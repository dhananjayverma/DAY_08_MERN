import React from 'react';
import { useTheme } from './ThemeContext';
import './UserForm.css';

const UserForm = () => {
  const { currentTheme, themes } = useTheme();

  return (
    <div className="user-form-container" style={{ background: themes[currentTheme].background, color: themes[currentTheme].text }}>
      <h2>User Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
