/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShowsPage.css';

const Buttons = ({ count, setCount }) => {

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className={styles.button}>
      {
        count === 1
          ?
          <div>
            <button className={styles.next} onClick={handleIncrease}>Next</button>
            <span data-testid="span" className={styles.count}>Page {count}</span>
          </div>
          :
          <div>
            <button className={styles.previous} onClick={handleDecrease}>Previous</button>
            <span className={styles.count}>Page {count}</span>
            <button className={styles.next} onClick={handleIncrease}>Next</button>
          </div>
      }
    </div>
  );
};

Buttons.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func
};

export default Buttons;
