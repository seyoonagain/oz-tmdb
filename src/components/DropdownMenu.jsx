import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import useOutsideClick from '../hooks/useOutsideClick';
import { useNavigate } from 'react-router-dom';
import { DROPDOWN_MENUS } from '../lib/constants';

const DropdownMenu = ({ setShowDropdown }) => {
  const { user, username, signOut } = useAuthContext();
  const [avatarUrl, setAvatarUrl] = useState('');
  const navigate = useNavigate();
  const ref = useOutsideClick(() => setShowDropdown(false));
  const handleMenuClick = (url) => {
    url && navigate(url);
    !url && signOut().then(() => navigate('/'));
    setShowDropdown(false);
  };
  useEffect(() => {
    if (user) {
      user.avatar_url && setAvatarUrl(user.avatar_url);
    }
  }, []);
  return (
    <div
      ref={ref}
      className='absolute z-50 top-7 right-0 min-w-32 border border-zinc-950 bg-zinc-100 font-chicago'
    >
      <ul className='h-full flex flex-col justify-center'>
        {user && (
          <>
            <div className='flex items-center px-3 gap-2 border-b border-zinc-950 h-12 cursor-default'>
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  className='size-7 rounded-full border border-zinc-950 saturate-0'
                />
              ) : (
                <div className='size-7 rounded-full border border-zinc-950 text-center content-center font-dePixel'>
                  {username[0]}
                </div>
              )}
              <p className='text-lg'>{username}</p>
            </div>
          </>
        )}

        {DROPDOWN_MENUS[user ? 'afterSignIn' : 'beforeSignIn'].map((menu) => (
          <li
            key={menu.title}
            className='hover:bg-zinc-950 hover:text-zinc-100 px-3 py-1 cursor-pointer'
            onClick={() => handleMenuClick(menu.url)}
          >
            {menu.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
