import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts data from JSONPlaceholder API
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function PostsComponent() {
  const { data, isError, isLoading, error, refetch } = useQuery('posts', fetchPosts, {
    // Options to customize query behavior
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when window regains focus
    keepPreviousData: true, // Keep previous data when fetching new data
  });

  if (isLoading) return <p>Loading...</p>;

  // Handle error state
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
