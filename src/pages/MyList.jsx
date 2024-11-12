import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

const MyList = () => {
  const { username } = useAuthContext();
  return (
    <>
      {username && (
        <p className='font-dePixel font-bold text-center mt-5'>
          {username}'s Movie List
        </p>
      )}
    </>
  );
};

export default MyList;
