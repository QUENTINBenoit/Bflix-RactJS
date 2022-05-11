import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


// import covert from 'src/assets/images/imageTest.jpg';
import './list.scss';

const List = ({ series }) => (
  <div className="list">
    <h2 className="list__title">{series.title}</h2>
    <div className="list__images">
      <img
        src={series.poster}
        className="list__image"
        alt="display image"
      />
    </div>
  </div>
);

List.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default List;
