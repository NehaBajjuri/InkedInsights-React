import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="px-1">
      <section className="categories">
        <h2 className="text-center text-dark">Categories</h2>

        <Link to="/sidebar.html" className="d-flex justify-content-between text-dark">
          <span>Travel</span>
        </Link>
        <Link to="/pizza.html" className="d-flex justify-content-between text-dark">
          <span>Food</span>
        </Link>
        <Link to="#" className="d-flex ```jsx
        justify-content-between text-dark">
          <span>Technology</span>
        </Link>
        <Link to="#" className="d-flex justify-content-between text-dark">
          <span>Fashion</span>
        </Link>
      </section>

      <section className="trending-post mt-3">
        <h2 className="text-center text-dark py-2">Trending Post</h2>

        <div className="post-item py-1">
          <article className="article">
            <div className="d-flex">
              <Link to="#">
                <img src="./assets/img1.jpg" className="rounded px-1" alt="" />
              </Link>
              <div className="cart-body">
                <div className="trending-category">
                  <Link to="#" className="link text-primary">Fashion</Link>
                </div>
                <Link to="#" className="text-title display-2 text-dark">
                  Looking for some feedback for this rejected track technology
                </Link>
                <p className="secondary-title text-secondary display-3">
                  <span>
                    <i className="far fa-clock text-primary"></i>
                    Clock Wed 02, 2019
                  </span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* Additional trending posts can be added here */}
      </section>
    </aside>
  );
};

export default Sidebar;