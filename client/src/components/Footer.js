import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faMapMarkerAlt, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row mb-3">
          <div className="col-3">
            <h2 id="About" className="footer-title secondary-title">About Us</h2>
            <div className="secondary-title text-secondary">
              <p className="mt-2">
                Welcome to Inked Insights, your go-to destination for insightful and engaging content on food, travel, technology, and many more. Our mission is to empower and inspire readers by delivering high-quality articles that inform, entertain, and provoke thoughtful discussions.
              </p>
              <address>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
                Hyderabad
              </address>
              <div className="phone">
                <FontAwesomeIcon icon={faMobile} className="text-primary" />
                123-456-789
              </div>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                inkedinsights@gmail.com
              </div>
            </div>
          </div>
          <div className="col-3">
            <h2 className="footer-title secondary-title">Feature Post</h2>
            <div className="feature-post">
              {/* Feature posts can be added here */}
            </div>
          </div>
          <div className="col-3">
            <h2 className="footer-title secondary-title">Tags</h2>
            <div className="tags" id="contact">
              <div className="d-flex flex-wrap">
                <Link to="/sidebar.html" className="nav-link btn bg-light">Travel</Link>
                <Link to="/pizza.html" className="nav-link btn bg-light">Food</Link>
                <Link to="#" className="nav-link btn bg-light">Lifestyle</Link>
                <Link to="#" className="nav-link btn bg-light">Technology</Link>
                <Link to="#" className="nav-link btn bg-light">Fashion</Link>
              </div>
            </div>
            <h2 className="footer-title secondary-title mt-2">Social</h2>
            <div className="tags social">
              <div className="d-flex flex-wrap">
                <Link to="#" className="nav-link btn bg-light"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#" className="nav-link btn bg-light"><i className="fab fa-twitter"></i></Link>
                <Link to="#" className="nav-link btn bg-light"><i className="fab fa-instagram"></i></Link>
                <Link to="#" className="nav-link btn bg-light"><i className="fab fa-dribbble"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p className="text-center text-secondary display-2">
            © 2023 <Link to="#" className="text-primary">InkedInsights </Link> - Personal Blog Theme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;