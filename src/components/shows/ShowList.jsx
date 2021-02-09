import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Show from './Show';

const ShowList = ({ shows }) => {
  const showElements = shows.map(show => (
    <div key={show.id}>
      <Link to={`/shows/${show.id}`}>
        <Show image={show.image} name={show.name} />
      </Link>
    </div>
  ));

  return (
    <div data-testid="shows">
      {showElements}
    </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default ShowList;
