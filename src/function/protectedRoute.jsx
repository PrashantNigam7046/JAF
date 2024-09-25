// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('authToken_hr');
    const role = localStorage.getItem('roleName_admin'); // Ensure the user role is stored in localStorage

    // Check if the user is authenticated and has the required role
    console.log("role", role)
    const isAuthenticated = token && allowedRoles.includes(role);
    console.log("allowedRoles", allowedRoles.includes(role))

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
