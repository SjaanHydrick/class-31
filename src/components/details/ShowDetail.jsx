import React from 'react';
import PropTypes from 'prop-types';

const ShowDetail = ({ name, status, description, image }) => (
  <div>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{status}</p>
    <p>{description}</p>
  </div>
);

ShowDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ShowDetail;
