import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () =>
    <header className="navigation">
      <Link
        className="navigation__brand"
        to="/">JSON Posts</Link>
    </header>;

export default NavigationBar;
