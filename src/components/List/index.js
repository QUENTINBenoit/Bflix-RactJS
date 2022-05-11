import React from 'react';
import PropTypes from 'prop-types';

// import covert from 'src/assets/images/imageTest.jpg';
import './list.scss';

const List = ({ title, poster }) => (
  <div className="list">
    <h2 className="list__title">{title}</h2>
    <div className="list__images">
      <img
        src={poster}
        className="list__image"
        alt="display image"
      />
    </div>
  </div>
);

List.propTypes = {

  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,

};
export default List;
// ben@gmail.com
