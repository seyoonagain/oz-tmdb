import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) return <Navigate to='/' replace />;
  return children;
};

export default ProtectedRoute;
