import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Fraud Detection System</h1>
      <div style={{ display: 'flex', justifyContent: 'space-center' }}>
        <Link to="/transactions" style={{ marginRight: '80px' }}>Go to Transactions</Link>
        <Link to="/analytics">Analysis</Link>
        <Link to="/predict">Predictor</Link>

      </div>
    </div>
  );
};

export default HomePage;