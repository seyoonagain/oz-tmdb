import { Search } from 'lucide-react';
import React, { useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import useDebounce from '../hooks/useDebounce';
import searchIcon from '../assets/searchIcon.png';

const SearchInput = () => {
  const { handleDebounceQueryChange } = useDebounce();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex items-center relative font-chicago'
      >
        <input
          onChange={handleDebounceQueryChange}
          placeholder='Titles'
          className='w-52 text-lg px-2 border-b border-zinc-950 bg-transparent outline-none h-5'
        />
        <button type='button' className='shrink-0'>
          <img src={searchIcon} className='size-5' />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
