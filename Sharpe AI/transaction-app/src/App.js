import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transaction from './components/Transaction';
import DataPage from './components/DataPage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/data" element={<DataPage />} />
      </Routes>
    </Router>
  );
}

export default App;
