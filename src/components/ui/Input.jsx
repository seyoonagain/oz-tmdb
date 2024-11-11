import React from 'react';

const Input = ({ type, name, label }) => {
  return (
    <div className='flex flex-col font-chicago text-lg'>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        id={label}
        className='border-b border-zinc-950 dark:border-zinc-100 bg-transparent w-72 h-7 outline-none px-1'
        autoComplete='off'
      />
    </div>
  );
};

export default Input;
