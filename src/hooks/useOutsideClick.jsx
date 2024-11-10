import { useEffect, useRef } from 'react';

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClick);
  }, [callback, ref]);

  return ref;
};

export default useOutsideClick;
