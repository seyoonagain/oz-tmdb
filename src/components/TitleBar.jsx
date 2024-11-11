import React from 'react';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
import { useDarkMode } from '../contexts/DarkModeContext';

const TitleBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className='sticky top-0 left-0 w-full bg-zinc-100 z-50 h-7 border-b border-zinc-950 flex items-center px-3'>
      <div className='w-3 h-3 border border-zinc-950'></div>
      <p className='mx-auto font-chicago text-2xl'>Movie</p>
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <img src={sun} className='size-[14px]' />
        ) : (
          <img src={moon} className='size-[14px]' />
        )}
      </button>
    </div>
  );
};

export default TitleBar;
