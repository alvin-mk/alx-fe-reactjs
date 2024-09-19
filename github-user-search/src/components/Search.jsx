import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService'; // Ensure this path matches your file structure

const Search = () => {
  // State variables
  const [searchTerm, setSearchTerm] = useState('');  // For the search input value
  const [location, setLocation] = useState('');      // For the location input value
  const [minRepos, setMinRepos] = useState(0);       // For the minimum repositories input value
  const [usersData, setUsersData] = useState([]);    // For storing user data from the API (array of users)
  const [loading, setLoading] = useState(false);     // For loading state during the API call
  const [error, setError] = useState('');            // For error state if no users are found

  // Function to handle the search
  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent the form from refreshing the page

    if (!searchTerm.trim()) {
      setError('Please enter a GitHub username.');  // Ensure input is not empty
      setUsersData([]);
      return;
    }

    setLoading(true);  // Start the loading state
    setError('');      // Clear any previous error

    try {
      // Call fetchUsers with searchTerm, location, and minRepos
      const data = await fetchUsers(searchTerm, location, minRepos);
      if (data.length > 0) {
        setUsersData(data);  // Set the users data if successful
      } else {
        setError('Looks like we can’t find the user');  // Set error message if no users found
      }
    } catch (err) {
      setUsersData([]);  // Clear previous user data if an error occurs
      setError('Looks like we can’t find the user');  // Set the error message for any error
    } finally {
      setLoading(false);  // Stop the loading state
    }
  };

  return (
    <div className="search-container p-4 max-w-md mx-auto">  {/* Tailwind CSS classes for styling */}
      {/* Form to handle the search input */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."  // Placeholder text for the search input
          value={searchTerm}  // The input value is controlled by React state
          onChange={(e) => setSearchTerm(e.target.value)}  // Update state on user input
          className="border rounded px-4 py-2 w-full"  // Tailwind CSS for styling the input
        />
        <input
          type="text"
          placeholder="Location (optional)"  // Placeholder text for the location input
          value={location}  // The input value is controlled by React state
          onChange={(e) => setLocation(e.target.value)}  // Update state on user input
          className="border rounded px-4 py-2 w-full mt-2"  // Tailwind CSS for styling the input
        />
        <input
          type="number"
          placeholder="Min Repos (optional)"  // Placeholder text for the minimum repos input
          value={minRepos}  // The input value is controlled by React state
          onChange={(e) => setMinRepos(e.target.value)}  // Update state on user input
          className="border rounded px-4 py-2 w-full mt-2"  // Tailwind CSS for styling the input
        />
        <button
          type="submit"  // Submit button for triggering the search
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering to display different content based on the state */}
      {loading && <p>Loading...</p>}  // Show loading message while API call is in progress
      {error && <p className="text-red-500">{error}</p>}  // Display error message if the API call fails
      {usersData.length > 0 && (  // Display user data if API call is successful
        <div>
          {usersData.map(user => (  // Map over users data to display each user
            <div key={user.id} className="user-info p-4 border rounded shadow-lg">
              <img
                src={user.avatar_url}  // Display the user's GitHub avatar
                alt={user.login}  // Alt text for the avatar
                className="w-16 h-16 rounded-full mx-auto"  // Tailwind CSS classes for styling the image
              />
              <h2 className="text-lg font-semibold text-center">{user.name || user.login}</h2>  // Display user's name or username
              <p className="text-center">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View GitHub Profile  // Link to the user's GitHub profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
