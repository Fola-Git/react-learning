import React from 'react';

const Button = ({ text, onClick, color = 'blue' }) => {
  const style = {
    padding: '10px 20px',
    backgroundColor: color,
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    margin: '10px'
  };

  return <button style={style} onClick={onClick}>{text}</button>;
};

export default Button;
