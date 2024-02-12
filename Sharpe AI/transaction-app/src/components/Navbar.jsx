import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { FaHome, FaExchangeAlt, FaDatabase } from 'react-icons/fa';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#2C3E50' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span role="img" aria-label="Welcome">🚀</span> Welcome
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
              <Link className="nav-link" to="/" onClick={() => handleNavLinkClick('home')}>
                <FaHome /> Home
              </Link>
            </li>
            <li className={`nav-item ${activeLink === 'transactions' ? 'active' : ''}`}>
              <Link className="nav-link" to="/transaction" onClick={() => handleNavLinkClick('transactions')}>
                <FaExchangeAlt /> Transactions
              </Link>
            </li>
            <li className={`nav-item ${activeLink === 'data' ? 'active' : ''}`}>
              <Link className="nav-link" to="/data" onClick={() => handleNavLinkClick('data')}>
                <FaDatabase /> Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
