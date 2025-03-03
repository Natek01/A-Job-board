import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';

import HomePage from './pages/HomePage';
import JobListingsPage from './pages/JobListingsPage';
import JobDetailPage from './pages/JobDetailPage';
import EmployerDashboardPage from './pages/EmployerDashboardPage';
import CandidateDashboardPage from './pages/CandidateDashboardPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobListingsPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/employer/dashboard" element={<EmployerDashboardPage />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
