import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [flaggedTransactions, setFlaggedTransactions] = useState(0);
  const [recentAlerts, setRecentAlerts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend (placeholder logic)
    // Replace these with actual API calls
    setTotalTransactions(1000); // Example value
    setFlaggedTransactions(50); // Example value

    // Example alert data
    setRecentAlerts([
      { id: 1, transactionId: 12345, message: 'Suspicious Activity' },
      { id: 2, transactionId: 12346, message: 'High-Value Transaction' },
    ]);
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="dashboard-sections">
        <section className="overview">
          <h2>Transaction Overview</h2>
          <p>Total Transactions: {totalTransactions}</p>
          <p>Flagged Transactions: {flaggedTransactions}</p>
        </section>
        <section className="alerts">
          <h2>Real-Time Alerts</h2>
          <ul>
            {recentAlerts.map((alert) => (
              <li key={alert.id}>
                Transaction {alert.transactionId} - {alert.message}
              </li>
            ))}
          </ul>
        </section>
        <section className="analytics">
          <h2>Analytics</h2>
          {/* Placeholder for graphs and charts */}
          <p>Graphs and Charts will go here.</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;