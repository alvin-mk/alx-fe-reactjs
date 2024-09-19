import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError('Please enter a GitHub username.');
      setUserData(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
      setError(null);
    } catch (err) {
      setUserData(null);
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="user-info p-4 border rounded shadow-lg">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h2 className="text-lg font-semibold text-center">{userData.name || userData.login}</h2>
          <p className="text-center">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
