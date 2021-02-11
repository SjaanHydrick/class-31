/* eslint-disable max-len */
import React from 'react';
import ShowList from '../components/shows/ShowList';
import Loading from '../components/loading/Loading';
import { useShows } from '../state/shows';
import { useTheme } from '../state/showContext';
import Buttons from './Buttons';
import styles from './ShowsPage.css';

const ShowsPage = () => {
  const { loading, shows, count, setCount } = useShows();

  const { theme } = useTheme();

  if(loading) return <Loading />;
  return (
    <div className={`${styles[theme]}`}>
      <ShowList shows={shows} />
      <Buttons count={count} setCount={setCount}/>
    </div>
  );
};

export default ShowsPage;
