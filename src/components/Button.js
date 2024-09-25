import React from 'react';
import '../styles/UI.css';

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;