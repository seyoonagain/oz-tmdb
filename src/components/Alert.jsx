import React from 'react';
import bomb from '../assets/bomb.png';

const Alert = ({ errorMessage, setErrorMessage }) => {
  return (
    <section className='z-50 absolute top-1/2 -translate-y-1/2 p-5 h-36 bg-zinc-100 text-zinc-950 border border-zinc-950 font-chicago flex flex-col '>
      <div className='flex gap-4'>
        <img src={bomb} className='size-12' />
        <p>{errorMessage}</p>
      </div>
      <button
        onClick={() => setErrorMessage('')}
        className='border border-zinc-950 rounded-lg w-16 self-end absolute bottom-5'
      >
        Close
      </button>
    </section>
  );
};

export default Alert;
