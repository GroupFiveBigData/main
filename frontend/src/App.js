import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import TransactionListPage from './pages/TransactionListPage';
import AnalysisPage from './pages/AnalyticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionListPage />} />        
        <Route path="/analytics" element={<AnalysisPage />} />


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;