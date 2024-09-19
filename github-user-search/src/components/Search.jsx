import React, { useState } from 'react';            // Importing React and useState for state management
import { fetchUserData } from '../services/githubService';  // Importing the API service function
import React from 'react';
const Search = () => 
  // State variables
  const [searchTerm, setSearchTerm] = useState('');   // For the search input value
  const [userData, setUserData] = useState(null);     // For storing user data from the API
  const [loading, setLoading] = useState(false);      // For loading state during the API call
  const [error, setError] = useState(null);           // For error state if the user is not found

  // Function to handle the search
  const handleSearch = async (e) => {
    e.preventDefault();            // Prevent the form from refreshing the page
    if (!searchTerm.trim()) {
      setError('Please enter a GitHub username.');  // Ensure input is not empty
      setUserData(null);
      return;
    }

    setLoading(true);              // Start the loading state
    setError(null);                // Clear any previous error

    try {
      const data = await fetchUserData(searchTerm);   // Fetch data using the GitHub API
      setUserData(data);                              // Set the user data if successful
      setError(null);
    } catch (err) {
      setUserData(null);                              // Clear previous user data if an error occurs
      setError('Looks like we can’t find the user');  // Set an error message if the API call fails
    } finally {
      setLoading(false);         // Stop the loading state
    }
  };

  return (
    <div className="search-container p-4 max-w-md mx-auto">  {/* Tailwind CSS classes for styling */}
      {/* Form to handle the search input */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."   // Placeholder text for the search input
          value={searchTerm}                       // The input value is controlled by React state
          onChange={(e) => setSearchTerm(e.target.value)}  // Update state on user input
          className="border rounded px-4 py-2 w-full"   // Tailwind CSS for styling the input
        />
        <button
          type="submit"                              // Submit button for triggering the search
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering to display different content based on the state */}
      {loading && <p>Loading...</p>}   {/* Show loading message while API call is in progress */}
      {error && <p className="text-red-500">{error}</p>}        {/* Display error message if the API call fails */}
      {userData && (                   {/* Display user data if API call is successful */}
        <div className="user-info p-4 border rounded shadow-lg"> 
          <img
            src={userData.avatar_url}   // Display the user's GitHub avatar
            alt={userData.login}        // Alt text for the avatar
            className="w-16 h-16 rounded-full mx-auto"  // Tailwind CSS classes for styling the image
          />
          <h2 className="text-lg font-semibold text-center">{userData.name || userData.login}</h2>   {/* Display user's name or username */}
          <p className="text-center">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View GitHub Profile          {/* Link to the user's GitHub profile */}
            </a>
          </p>
        </div>

  );
};

export default Search;
