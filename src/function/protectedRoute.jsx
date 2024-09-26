// protectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const userRole = "Hr"; // Replace this with your logic to get the user's role

  // Check if the user role is allowed
  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/login-hr" />;
};

export default ProtectedRoute;
