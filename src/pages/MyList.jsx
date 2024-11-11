import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

const MyList = () => {
  const { user } = useAuthContext();
  const [username, setUsername] = useState('');
  useEffect(() => {
    const name = user?.display_name || user?.full_name || null;
    setUsername(name);
  }, [user]);
  return <>{username && <p>{username}'s Movie List</p>}</>;
};

export default MyList;
