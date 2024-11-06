import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 bg-white border-b border-zinc-400 z-50 w-full h-16 px-5 content-center text-3xl font-bold'>
      <Link to='/' className='cursor-pointer'>
        OZ TMDB
      </Link>
    </header>
  );
};

export default Header;
