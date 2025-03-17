// Login.js
import React, { useState } from "react";
import './Login.css';  // (Optional) You can add your styles here for the login page

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    // For now, just log the credentials (In a real app, you'd send this to an API)
    console.log("Logging in with:", { username, password });

    // Reset form fields
    setUsername("");
    setPassword("");
    setError("");  // Clear error if validation passes
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
