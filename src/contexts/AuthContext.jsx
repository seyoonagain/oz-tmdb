import React, { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange, signIn, signOut, signUp } from '../api/SupabaseApi';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(readUserFromLocalStorage());
  const [username, setUsername] = useState(null);
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);
  useEffect(() => {
    if (user) {
      const { user_metadata: userInfo } = user;
      setUsername(
        userInfo?.user_name || userInfo?.full_name || userInfo?.display_name
      );
    } else setUsername(null);
  }, [user]);
  return (
    <AuthContext.Provider
      value={{ user: user?.user_metadata, username, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const readUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
