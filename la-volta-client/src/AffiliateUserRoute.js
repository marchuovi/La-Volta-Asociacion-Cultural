import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AffiliateUserRoute = () => {
  const auth = localStorage.getItem('auth_token');
  return auth ? <Outlet /> : <Navigate to='/' />;
}
export default AffiliateUserRoute