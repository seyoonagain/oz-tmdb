import React from 'react';

const SubmitButton = ({ text }) => {
  return (
    <button
      type='submit'
      className='my-5 text-zinc-950 dark:text-zinc-100 border-2 border-zinc-950 dark:border-zinc-100 rounded-xl text-lg px-2 active:border-l-[3px] active:border-t-[3px] active:border-r-[1px] active:border-b-[1px]'
    >
      {text}
    </button>
  );
};

export default SubmitButton;
