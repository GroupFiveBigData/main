import React from 'react';
import './TransactionTable.css'; 

const TransactionTable = ({ transactions }) => {
  return (
    <div className="transaction-table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Flagged</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className={transaction.flagged ? 'flagged' : ''}>
              <td>{transaction.id}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.flagged ? 'Yes' : 'No'}</td>
              <td>{transaction.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;