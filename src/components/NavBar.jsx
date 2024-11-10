import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { Menu, Moon, Sun } from 'lucide-react';
import DropdownMenu from './ui/DropdownMenu';
import SearchInput from './SearchInput';
import { useDarkMode } from '../contexts/DarkModeContext';
import useOutsideClick from '../hooks/useOutsideClick';

const NavBar = ({ isHeaderBackgroundTransparent }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showInput, setShowInput] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const ref = useOutsideClick(() => setShowDropdown(false));
  const handleDropdownClick = (url) => {
    navigate(url);
    setShowDropdown(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 ${
        isHeaderBackgroundTransparent && !location.pathname.includes('/s')
          ? 'bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-transparent bg-opacity-25'
          : 'bg-zinc-950'
      } transition-all duration-700 ease-in-out z-50 w-full h-16 px-5 flex justify-between items-center`}
    >
      <Link
        to='/'
        className={`cursor-pointer ${showInput ? 'hidden sm:block' : 'block'}`}
      >
        <h1 className='text-3xl font-bold text-red-700'>OZ TMDB</h1>
      </Link>
      <nav className='flex gap-5 items-center text-zinc-100'>
        <SearchInput showInput={showInput} setShowInput={setShowInput} />
        <button onClick={() => toggleDarkMode()}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className={`relative ${showInput ? 'hidden sm:block' : 'block'}`}>
          <Menu
            size={20}
            className='cursor-pointer'
            onClick={() => setShowDropdown((prev) => !prev)}
          />
          {showDropdown && (
            <section
              ref={ref}
              className='flex flex-col absolute top-11 right-0 bg-zinc-200 text-zinc-950 dark:text-zinc-100 dark:bg-zinc-900 w-24'
            >
              <DropdownMenu
                text='회원가입'
                onClick={() => handleDropdownClick('/sign-up')}
              />
              <DropdownMenu
                text='로그인'
                onClick={() => handleDropdownClick('/sign-in')}
              />
            </section>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
