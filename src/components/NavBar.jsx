import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { Menu } from 'lucide-react';
import DropdownMenu from './ui/DropdownMenu';

const NavBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = (url) => {
    navigate(url);
    setShowDropdown(false);
  };
  return (
    <header className='fixed top-0 left-0 bg-zinc-950 border-b border-zinc-900 z-50 w-full h-16 px-5 content-center flex justify-between items-center'>
      <Link to='/' className='cursor-pointer'>
        <h1 className='text-3xl font-bold'>OZ TMDB</h1>
      </Link>
      <nav>
        <ul className='hidden sm:flex sm:gap-7'>
          <li>
            <Button text='회원가입' onClick={() => navigate('/sign-up')} />
          </li>
          <li>
            <Button text='로그인' onClick={() => navigate('/sign-in')} />
          </li>
        </ul>
        <div className='relative sm:hidden'>
          <Menu
            className='cursor-pointer'
            onClick={() => setShowDropdown((prev) => !prev)}
          />
          {showDropdown && (
            <section className='flex flex-col gap-2 absolute top-10 right-0 bg-zinc-900 w-24'>
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
