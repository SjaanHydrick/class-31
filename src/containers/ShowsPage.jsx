/* eslint-disable max-len */
import React from 'react';
import ShowList from '../components/shows/ShowList';
import Loading from '../components/loading/Loading';
import { useShows } from '../hooks/shows';

const ShowsPage = () => {
  const { loading, shows, count, setCount } = useShows();

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  if(loading) return <Loading />;
  return (
    <div>
      <ShowList shows={shows} />
      {
        count === 1
          ?
          <button onClick={handleIncrease}>Next Page</button>
          :
          <div>
            <button onClick={handleDecrease}>Previous Page</button>
            <span>Page {count}</span>
            <button onClick={handleIncrease}>Next Page</button>
          </div>
      }
    </div>
  );
};

export default ShowsPage;
