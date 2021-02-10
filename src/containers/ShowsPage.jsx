/* eslint-disable max-len */
import React from 'react';
import ShowList from '../components/shows/ShowList';
import Loading from '../components/loading/Loading';
import { useShows } from '../state/shows';
import Buttons from './Buttons';

const ShowsPage = () => {
  const { loading, shows, count, setCount } = useShows();

  if(loading) return <Loading />;
  return (
    <>
      <ShowList shows={shows} />
      <Buttons count={count} setCount={setCount}/>
    </>
  );
};

export default ShowsPage;
