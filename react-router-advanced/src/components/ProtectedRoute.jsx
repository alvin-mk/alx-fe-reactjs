import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication check (replace with your actual auth logic)
const isAuthenticated = () => {
  // You can replace this with real authentication logic
  // such as checking a token in localStorage or a global auth state
  return localStorage.getItem('authToken') !== null;
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the protected route if authenticated
  return children;
}

export default ProtectedRoute;
