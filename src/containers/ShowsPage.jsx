import React from 'react';
import ShowList from '../components/shows/ShowList';
import Loading from '../components/loading/Loading';
import { useShows } from '../hooks/shows';

const ShowsPage = () => {
  const { loading, shows } = useShows();

  if(loading) return <Loading />;
  return <ShowList shows={shows} />;
};

export default ShowsPage;
