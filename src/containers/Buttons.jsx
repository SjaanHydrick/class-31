/* eslint-disable max-len */
import React from 'react';
import { useShows } from '../hooks/shows';
import styles from './ShowsPage.css';

const Buttons = () => {
  const { count, setCount } = useShows();

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className={styles.button}>
      {
        count === 1
          ?
          <div>
            <button className={styles.next} onClick={handleIncrease}>Next Page</button>
            <span className={styles.count}>Page {count}</span>
          </div>
          :
          <div>
            <button className={styles.previous} onClick={handleDecrease}>Previous Page</button>
            <span className={styles.count}>Page {count}</span>
            <button className={styles.next} onClick={handleIncrease}>Next Page</button>
          </div>
      }
    </div>
  );
};

export default Buttons;
