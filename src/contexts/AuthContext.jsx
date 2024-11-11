import React, { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange, signIn, signOut, signUp } from '../api/SupabaseApi';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(readUserFromLocalStorage());
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);
  return (
    <AuthContext.Provider
      value={{ user: user?.user_metadata, signIn, signOut, signUp }}
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
