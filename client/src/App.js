import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main id="site-main">
        <section className="container">
          <div className="layout-2 row">
            <div className="col-8">
              <Post />
            </div>
            <div className="col-4">
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Router>
  );
};

export default App;