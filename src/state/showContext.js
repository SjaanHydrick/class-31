import React, { createContext } from 'react';
import Loading from '../components/loading/Loading';
import { fetchShows } from './shows';

export const ShowContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ShowProvider = ({ children }) => {
  const { loading, shows } = fetchShows();

  return (
    <ShowContext.Provider value={{ shows }}>
      {loading ? <Loading /> : children}
    </ShowContext.Provider>
  );
};
