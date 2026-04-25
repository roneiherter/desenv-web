import React from 'react';
import Navigation from './Navigation';

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
    <Navigation />
  </header>
);

export default Header;