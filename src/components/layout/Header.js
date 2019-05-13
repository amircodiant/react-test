import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <div className="inner">
        <a href="index.html" className="logo">
          <strong>Projection</strong>
          {' '}
by TEMPLATED
        </a>
        <nav id="nav">
          <Link to="/">Home</Link>
          <Link to="/generic">Generic</Link>
          <Link to="/elements">Elements</Link>
        </nav>
        <a href="#navPanel" className="navPanelToggle">
          <span className="fa fa-bars" />
        </a>
      </div>
    </header>
  );
}

export default Header;
