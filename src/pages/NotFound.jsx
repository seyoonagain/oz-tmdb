import React from 'react';
import bomb from '../assets/bomb.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-5 h-36 w-96 bg-zinc-100 border border-zinc-950 font-chicago flex flex-col '>
        <div className='flex gap-4'>
          <img src={bomb} className='size-12' />
          <div>
            <p className='font-dePixel font-bold text-xl'>Oops!</p>
            <p className='font-chicago'>Something went wrong.</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className='border border-zinc-950 rounded-lg w-16 self-end absolute bottom-5'
        >
          Go back
        </button>
      </section>
    </>
  );
};

export default NotFound;
