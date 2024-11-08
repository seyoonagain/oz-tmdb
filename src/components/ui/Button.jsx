import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className='text-sm' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
