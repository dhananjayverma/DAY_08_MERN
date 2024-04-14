import React, { useState, useRef } from 'react';
import './UserForm.css';

const UserForm = () => {
  // State for controlled input
  const [name, setName] = useState('');
  
  // Ref for uncontrolled input
  const emailRef = useRef(null);

  // Validation message
  const [validationError, setValidationError] = useState('');

  // Handle controlled input change
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setValidationError('Name must be at least 3 characters long');
    } else {
      setValidationError('');
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', emailRef.current.value);
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {validationError && <p className="error-message">{validationError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
