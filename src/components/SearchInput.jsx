import { Search } from 'lucide-react';
import React, { useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import useDebounce from '../hooks/useDebounce';

const SearchInput = ({ showInput, setShowInput }) => {
  const { handleDebounceQueryChange } = useDebounce();
  const ref = useOutsideClick(() => {
    ref.current.value = '';
    setShowInput(false);
  });
  const toggleInputVisibility = () => setShowInput(!showInput);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${
          showInput && 'border border-zinc-300'
        } flex items-center relative`}
      >
        <input
          onChange={handleDebounceQueryChange}
          ref={ref}
          placeholder='Titles'
          className={`${
            showInput ? 'block w-64 bg-opacity-75' : 'bg-opacity-0 w-0'
          } outline-none bg-zinc-950 h-8 pl-9 transition-all duration-500 placeholder:text-sm`}
        />
        <button
          type='button'
          onClick={toggleInputVisibility}
          className={`${showInput && 'absolute left-2'}`}
        >
          <Search size={20} />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
