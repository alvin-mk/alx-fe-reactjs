import React from 'react';
import './index.css';  // Import Tailwind CSS

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError('');
    try {
      const usersData = await fetchUserData(searchParams);
      setUsers(usersData);
    } catch (err) {
      setError('No users found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default App;
