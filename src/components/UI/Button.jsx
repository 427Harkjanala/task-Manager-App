import React from 'react';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
      {children}
    </button>
  );
};

export default Button;