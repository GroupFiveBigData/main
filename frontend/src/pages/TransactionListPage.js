import React, { useState, useEffect } from 'react';

const TransactionListPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the backend (placeholder logic)
    // Replace with an actual API call
    setTransactions([
      { id: 1, amount: 149.62, flagged: false },
      { id: 2, amount: 378.66, flagged: true },
      { id: 3, amount: 69.99, flagged: false },
    ]);
  }, []);

  return (
    <div className="container">
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Flagged</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.flagged ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionListPage;