import React from 'react';
import PropTypes from 'prop-types';

const Show = ({ image, name }) => (
  <div>
    <img src={image} alt={name} />
    <h2>{name}</h2>
  </div>
);

Show.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Show;
