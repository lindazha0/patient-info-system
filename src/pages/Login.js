import React, { useState } from 'react';
import  { Navigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically handle authentication.
    // For example, sending the username and password to your server for verification.
    console.log('Login submitted for username:', username);
    // After successful login, you might want to redirect the user to another page
    alert('Login Successful!');
    return <Navigate to= '/home' />;
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h1>M.A.V.A</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}


export default Login;