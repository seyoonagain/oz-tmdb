import React from 'react';

const DropdownMenu = ({ text, onClick }) => {
  return (
    <p
      className='px-5 py-3 text-sm cursor-pointer hover:bg-zinc-800'
      onClick={onClick}
    >
      {text}
    </p>
  );
};

export default DropdownMenu;
