
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
  const { login, setUsername } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    login(username); // Simulate login with provided username
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

