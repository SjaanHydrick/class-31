import React from 'react';
import PropTypes from 'prop-types';
import { useShowById } from '../hooks/shows';
import ShowDetail from '../components/details/ShowDetail';
import Loading from '../components/loading/Loading';

const ShowById = ({ match }) => {
  const { loading, show } = useShowById(match.params.id);

  if(loading) return <Loading />;
  return <ShowDetail {...show} />;
};

ShowById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ShowById;
