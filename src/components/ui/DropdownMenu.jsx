import React from 'react';

const DropdownMenu = ({ text, onClick }) => {
  return (
    <p
      className='px-5 py-2 text-sm cursor-pointer hover:underline'
      onClick={onClick}
    >
      {text}
    </p>
  );
};

export default DropdownMenu;
