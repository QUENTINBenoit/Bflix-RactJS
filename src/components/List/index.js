import React from 'react';
import PropTypes from 'prop-types';
// import covert from 'src/assets/images/imageTest.jpg';
import './list.scss';

const List = ({ series }) => (
  <div className="list">
    <h2 className="list__title">{series.Title}</h2>
    <div className="list__images">
      <img
        src={series.Poster}
        className="list__image"
        alt="display image"
      />
    </div>
  </div>
);

List.propTypes = {
  series: PropTypes.arrayOf({
    Title: PropTypes.string.isRequired,
    // Poster: PropTypes.string.isRequired,
  }),
};
export default List;
