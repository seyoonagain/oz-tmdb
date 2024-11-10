import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useDebounce = () => {
  const [debounceQuery, setDebounceQuery] = useState('');
  const navigate = useNavigate();

  const handleDebounceQueryChange = (event) => {
    setDebounceQuery(event.target.value);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (debounceQuery.length > 0) {
        navigate(`/search/${debounceQuery}`);
      } else {
        navigate('/');
      }
    }, 1000);
    return () => clearTimeout(debounceTimer);
  }, [debounceQuery]);

  return { handleDebounceQueryChange };
};

export default useDebounce;
