import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className='fixed top-0 left-0 bg-white border-b border-zinc-400 z-50 w-full h-16 px-5 content-center flex justify-between items-center'>
      <Link to='/' className='cursor-pointer'>
        <h1 className='text-3xl font-bold'>OZ TMDB</h1>
      </Link>
      <nav>
        <ul className='flex gap-7'>
          <li>
            <Button text='회원가입' onClick={() => navigate('/sign-up')} />
          </li>
          <li>
            <Button text='로그인' onClick={() => navigate('/sign-in')} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
