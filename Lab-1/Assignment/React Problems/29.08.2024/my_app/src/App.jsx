// App.jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch user data using useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
