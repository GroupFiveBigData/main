import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <div className="transaction-table">
      <table>
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
            <tr key={transaction.id}>
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