import React from 'react';
// import PropTypes from 'prop-types';
import covert from 'src/assets/images/imageTest.jpg';
import './list.scss';

const List = () => (
  <div className="list">
    <h2 className="list__title">Titre de la liste</h2>
    <div className="list__images">
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
      <img src={covert} className="list__image" alt="display image" />
    </div>
  </div>
);

// List.propTypes = {
// };
export default List;
