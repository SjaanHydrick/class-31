import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>THIS IS MY HEADER </h1>
    <Link to="/"><p>Back To Home</p></Link>
  </div>
);

export default Header;
