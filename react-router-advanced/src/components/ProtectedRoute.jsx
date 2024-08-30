import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';  // Import useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();  // Use the useAuth hook to check authentication

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the protected route if authenticated
  return children;
}

export default ProtectedRoute;
