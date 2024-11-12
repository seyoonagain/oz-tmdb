import React from 'react';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const LIST_STYLE =
  'px-2 inline-block h-full text-center content-center hover:text-zinc-100 hover:bg-zinc-900 cursor-pointer';

const ToolBar = () => {
  const navigate = useNavigate();
  return (
    <div className='sticky top-7 left-0 w-full bg-zinc-100 z-30 h-8 border-double border-b-4 border-zinc-950 px-3 flex items-center justify-between font-chicago'>
      <nav>
        <ul className='flex h-7 items-center font-chicago text-lg'>
          <li onClick={() => navigate('/')} className={LIST_STYLE}>
            Home
          </li>
        </ul>
      </nav>
      <SearchInput />
    </div>
  );
};

export default ToolBar;
