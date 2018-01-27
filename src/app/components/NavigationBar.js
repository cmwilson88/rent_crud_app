import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () =>
    <header className="navigation">
      <Link
        className="navigation-brand"
        to="/">Posts.</Link>
      <div className="navigation__buttons">
        <Link
          className="navigation-btn"
          to="/"> Posts </Link>
        |
        <Link
          className="navigation-btn"
          to="/users"
          disabled> Users </Link>
          
      </div>
    </header>;

export default NavigationBar;
