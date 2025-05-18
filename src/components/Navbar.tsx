import React from 'react';

const Navbar: React.FC = () => (
  <header className="header">
    <div className="container header-container">
      <div className="logo">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6C63FF"/>
            <stop offset="100%" stopColor="#3B2FFF"/>
          </linearGradient>
          <path fill="url(#grad)" d="M12 2L22 7L12 12L2 7L12 2Z"/>
          <path fill="url(#grad)" d="M12 12L22 17L12 22L2 17L12 12Z"/>
        </svg>
        <span className="logo-text">Genifty</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav-link nav-link-highlight">Start Tour</a>
        <a href="#" className="nav-link">Demos</a>
        <a href="#" className="nav-link">Features</a>
      </nav>
    </div>
  </header>
);

export default Navbar;
