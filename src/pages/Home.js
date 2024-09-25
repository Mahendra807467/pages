import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Task Manager</h1>
      <p>Please <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to continue.</p>
    </div>
  );
};

export default Home;