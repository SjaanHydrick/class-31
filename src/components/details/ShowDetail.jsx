import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../state/showContext';
import styles from './ShowDetail.css';

const ShowDetail = ({ name, status, description, image }) => {
  const { theme } = useTheme();

  return (
    <div className={styles[theme]}>
      <div className={styles.showDetail}>
        <img src={image} alt={name} className={styles.detailsImg}/>
        <h2 className={styles.detailsName}>{name}</h2>
        <p className={styles.status}>Status: {status}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

ShowDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string
};

export default ShowDetail;
