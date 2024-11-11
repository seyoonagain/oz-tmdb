import React from 'react';

const MENUS = ['', 'File', 'Edit', 'View', 'Special'];

const MenuBar = () => {
  return (
    <header className='fixed top-0 left-0 h-7 w-full bg-zinc-50 z-50 px-5 flex items-center border-b border-zinc-950'>
      <nav>
        <ul className='flex h-7 items-center font-chicago text-xl'>
          {MENUS.map((menu, idx) => (
            <li
              key={idx}
              className='px-2 inline-block h-full text-center content-center hover:text-zinc-100 hover:bg-zinc-900 cursor-pointer'
            >
              {menu}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
