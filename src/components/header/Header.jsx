import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <div className={styles.header}>
    <Link to="/">
      <h1>Popular Television</h1>
    </Link>
  </div>
);

export default Header;
