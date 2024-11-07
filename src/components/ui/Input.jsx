import React from 'react';

const Input = ({ type, name, label }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        id={label}
        className='border border-zinc-300 w-72 h-7 outline-none px-2'
      />
    </div>
  );
};

export default Input;
