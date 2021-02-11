import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../state/showContext';
import styles from './Shows.css';

const Show = ({ image, name }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles[theme]}`}>
      <div className={styles.show}>
        <img src={image} alt={name} className={styles.image}/>
        <h2 className={styles.name}>{name}</h2>
      </div>
    </div>
  );
};



Show.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Show;
