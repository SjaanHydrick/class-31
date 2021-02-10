/* eslint-disable max-len */
import React from 'react';
import ShowList from '../components/shows/ShowList';
import Loading from '../components/loading/Loading';
import { useShows } from '../hooks/shows';
import styles from './ShowsPage.css';

const ShowsPage = () => {
  const { loading, shows, count, setCount } = useShows();

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  if(loading) return <Loading />;
  return (
    <div>
      <ShowList shows={shows} />
      <div className={styles.button}>
        {
          count === 1
            ?
            <button className={styles.next} onClick={handleIncrease}>Next Page</button>
            :
            <div>
              <button className={styles.previous} onClick={handleDecrease}>Previous Page</button>
              <span className={styles.count}>Page {count}</span>
              <button className={styles.next} onClick={handleIncrease}>Next Page</button>
            </div>
        }
      </div>
    </div>
  );
};

export default ShowsPage;
