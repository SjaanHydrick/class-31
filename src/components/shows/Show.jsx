import React from 'react';
import PropTypes from 'prop-types';
import styles from './Shows.css';

const Show = ({ image, name }) => (
  <div className={styles.show}>
    <img src={image} alt={name} className={styles.image}/>
    <h2 className={styles.name}>{name}</h2>
  </div>
);

Show.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Show;
