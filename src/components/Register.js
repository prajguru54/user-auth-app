import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { serverPort } from '../constants';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const registerUrl = `http://localhost:${serverPort}/auth/register`
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(registerUrl, { username, password });
      console.log(response.data); // Handle the response as needed
      setUsername('')
      setPassword('')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
