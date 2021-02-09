import { useState, useEffect } from 'react';
import { fetchShows, fetchShowById } from '../services/shows';

export const useShows = () => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows()
      .then(shows => {
        setShows(shows);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    shows
  };
};

export const useShowById = id => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchShowById(id)
      .then(show => {
        setShow(show);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    show
  };
};
