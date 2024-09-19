import axios from 'axios';

// Define the base URL for GitHub API
const GITHUB_API_URL = 'https://api.github.com/search/users';

// Function to fetch users based on search criteria
export const fetchUsers = async (searchTerm, location = '', minRepos = 0) => {
  try {
    // Construct the query string with optional parameters
    const query = `${searchTerm}${location ? `+location:${location}` : ''}${minRepos ? `+repos:${minRepos}` : ''}`;
    const url = `${GITHUB_API_URL}?q=${query}`;

    // Make the API request
    const response = await axios.get(url);

    // Return the results from the API response
    return response.data.items;
  } catch (error) {
    // Handle and throw errors to be caught in the component
    throw new Error(error.response ? error.response.data.message : 'Error fetching user data');
  }
};
