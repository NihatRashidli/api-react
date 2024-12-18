import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/production');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='container'>
        <header className="App-header">
          <h1>Welcome to React!</h1>
        </header>
        <div className="database-cards">
          {users.map((user, index) => (
            <div className="card" key={index}>
              <p>
                <strong>Name:</strong> {user.first_name}
                <strong>Surname:</strong> {user.last_name}
                <strong>Email:</strong> {user.email}
                <strong>Gender:</strong> {user.gender}
                <div className="image-container">
                  <img
                    src={user.ip_address}
                    alt={`${user.first_name}'s image`}
                    className="user-image"
                  />
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default App;
