import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvide';
import { Navigate } from 'react-router-dom';

const Requireduth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Requireduth;
