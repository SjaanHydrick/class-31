import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/showContext';
import styles from './Header.css';

const Header = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className={`${styles[theme]}`}>
      <div className={styles.header}>
        {theme === 'light'
          ?
          <span className={styles.darkMode}>Dark Mode</span>
          :
          <span className={styles.lightMode}>Light Mode</span>
        }
        <input type="checkbox" onChange={toggle} />
        <Link to="/">
          <h1>Popular Television</h1>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  toggle: PropTypes.func
};

export default Header;
