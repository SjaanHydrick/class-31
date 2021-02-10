import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Show from './Show';
import styles from './Shows.css';

const ShowList = ({ shows }) => {
  const showElements = shows.map(show => (
    <div key={show.id}>
      <Link to={`/shows/${show.id}`}>
        <Show image={show.image} name={show.name} />
      </Link>
    </div>
  ));

  return (
    <div className={styles.showList} data-testid="shows">
      {showElements}
    </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string
  }))
};

export default ShowList;
