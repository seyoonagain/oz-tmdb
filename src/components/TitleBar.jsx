import React, { useState } from 'react';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
import userIcon from '../assets/user-icon.png';
import noUserIcon from '../assets/no-user-icon.png';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useAuthContext } from '../contexts/AuthContext';
import DropdownMenu from './DropdownMenu';
import useOutsideClick from '../hooks/useOutsideClick';

const TitleBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useAuthContext();
  return (
    <div className='sticky top-0 left-0 w-full bg-zinc-100 z-40 h-7 border-b border-zinc-950 flex items-center px-3'>
      <div className='w-20'>
        <div className='w-3 h-3 border border-zinc-950'></div>
      </div>
      <p className='mx-auto font-chicago text-2xl'>Movie</p>
      <div className='flex gap-2 w-20 justify-end'>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <img src={sun} className='size-[14px]' />
          ) : (
            <img src={moon} className='size-[14px]' />
          )}
        </button>
        <div className='relative'>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            {user ? (
              <img src={userIcon} className='size-[14px]' />
            ) : (
              <img src={noUserIcon} className='size-[14px]' />
            )}
          </button>
          {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
