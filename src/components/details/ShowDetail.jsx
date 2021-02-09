import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShowDetail.css';

const ShowDetail = ({ name, status, description, image }) => (
  <div className={styles.showDetail}>
    <img src={image} alt={name} className={styles.detailsImg}/>
    <h2 className={styles.detailsName}>{name}</h2>
    <p className={styles.status}>Status: {status}</p>
    <p className={styles.description}>{description}</p>
  </div>
);

ShowDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ShowDetail;
