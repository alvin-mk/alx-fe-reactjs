/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async (page = 1) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    return response.data;
};

function PostsComponent() {
    const [page, setPage] = useState(1)

    const { isLoading, isError, data, error, refetch } = useQuery(["posts", page], () => fetchPosts(page), {
        staleTime: 60000,
        cacheTime: 300000,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            <h2>Posts</h2>
            <button
                style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    borderRadius: '3px',
                    backgroundColor: '#333',
                    color: '#fff',
                    cursor: 'pointer'
                }}
                onClick={() => refetch()}
            >Refresh Posts</button>
            <ul>
                {
                    data && data.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                        </li>
                    ))
                }
            </ul>
            <div>
                <button
                    style={{
                        marginLeft: '10px',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        backgroundColor: 'gray',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1}
                >
                    Previous Page
                </button>
                <span>Current Page: {page}</span>
                <button 
                style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    borderRadius: '3px',
                    backgroundColor: '#333',
                    color: '#fff',
                    cursor: 'pointer'
                }}
                onClick={() => setPage((old) => old + 1)
                }>Next Page</button>
            </div>
        </div>
    );
}

export default PostsComponent;
