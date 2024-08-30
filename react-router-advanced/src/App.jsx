import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import BlogPost from './BlogPost';  // Import the BlogPost component
import ProtectedRoute from './ProtectedRoute';  // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogPost />} />  {/* Dynamic route for blog posts */}
        
        {/* Protected route for the Profile section */}
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
