import React, { createContext } from 'react';
import Loading from '../components/loading/Loading';
import { fetchShows } from '../services/shows';

export const ShowContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ShowProvider = ({ children }) => {
  const { loading, shows, count, setCount } = fetchShows();

  return (
    <ShowContext.Provider value={{ shows, count, setCount }}>
      {loading ? <Loading /> : children}
    </ShowContext.Provider>
  );
};
