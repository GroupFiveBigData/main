import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import TransactionListPage from './pages/TransactionListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionListPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;