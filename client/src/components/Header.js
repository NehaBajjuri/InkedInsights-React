import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header id="header" className="shadow bg-light">
      <nav className="container navbar">
        <Link to="/index.html" className="nav-brand text-dark">
          InkedInsights
        </Link>

        <button className="toggle-button">
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>

        <div className="collapse">
          <ul className="navbar-nav">
            <Link to="/index.html" className="nav-link">
              Home
            </Link>
            <Link to="/sidebar.html" className="nav-link">
              Categories
            </Link>
            <Link to="#About" className="nav-link">
              About
            </Link>
            <Link to="#contact" className="nav-link">
              Contact
            </Link>
          </ul>
        </div>

        <div className="collapse">
          <ul className="navbar-nav">
            <div className="search-box">
              <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </div>
            <Link to="#" className="nav-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="#" className="nav-link">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="#" className="nav-link">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="#" className="nav-link">
              <FontAwesomeIcon icon={faDribbble} />
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;