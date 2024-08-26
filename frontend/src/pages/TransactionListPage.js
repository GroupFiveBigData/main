import React, { useState, useEffect } from 'react';
import TransactionTable from '../components/TransactionTable';


const TransactionListPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3002/transactions');        
        console.log('Response:', response);       
         if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1>Transactions</h1>
      <TransactionTable transactions={transactions} />
      {/* <AnalyticsSection transactions={transactions} /> */}
    </div>
  );
};

export default TransactionListPage;