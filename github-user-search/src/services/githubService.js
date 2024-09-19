import axios from 'axios';

// Base URL for GitHub search API
const BASE_URL = "https://api.github.com/search/users?q";

// Function to fetch user data with advanced search options
export const fetchUserData = async (searchTerm, location = '', minRepos = 0) => {
  try {
    // Construct the query string with optional parameters
    let query = `q=${searchTerm}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos > 0) {
      query += `+repos:${minRepos}`;
    }
    
    // Construct the full URL with the query string
    const url = `${BASE_URL}?${query}`;
    
    // Make the API request
    const response = await axios.get(url);
    
    // Return the results from the API response
    return response.data.items; // Adjust this if your data structure differs
  } catch (error) {
    throw new Error('User not found');
  }
};
