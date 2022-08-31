import React from 'react';
import PropTypes from 'prop-types';

import './shows.scss';

const Shows = ({ title, poster }) => (
  <img src={poster} className="listez__image" alt={`Poster ${title}`} />
);

Shows.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
export default Shows;
