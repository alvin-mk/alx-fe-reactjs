import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts data from JSONPlaceholder API
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
