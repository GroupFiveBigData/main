import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Fraud Detection System</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default HomePage;