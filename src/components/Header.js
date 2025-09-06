import React, { useState } from 'react';
import logo from '../asset/logo.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the new CSS file

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    navigate(`/search?s=${queryTerm}`);
    event.target.reset(); // Clear input after search
    setMenuOpen(false); // Close menu after search on mobile
  }

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} className="logo" alt="Filminfo Logo" />
          <span className="brand-name">Filminfosis</span>
        </NavLink>

        {/* This div will overlay the content when the menu is open on mobile */}
        {isMenuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link" onClick={handleLinkClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies/popular" className="nav-link" onClick={handleLinkClick}>Popular</NavLink>
            </li>
            <li>
              <NavLink to="/movies/top" className="nav-link" onClick={handleLinkClick}>Top</NavLink>
            </li>
            <li>
              <NavLink to="/movies/upcomming" className="nav-link" onClick={handleLinkClick}>Upcoming</NavLink>
            </li>
          </ul>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              name="search"
              type="text"
              className="search-input"
              placeholder="Search movies..."
              autoComplete="off"
            />
            <button type="submit" className="search-button" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </form>
        </div>

        <button
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
}

