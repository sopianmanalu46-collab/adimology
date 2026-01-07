import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-icon"></div>
        <div className="navbar-content">
          <h1 className="navbar-title">Adimology Calculator</h1>
          <p className="navbar-subtitle">Analyze stock targets based on broker data from Stockbit</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
