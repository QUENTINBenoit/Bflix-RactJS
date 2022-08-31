import React from 'react';
import PropTypes from 'prop-types';

import Shows from './Shows';

import './list.scss';

const List = ({ series }) => (
  <div className="list">
    <h2 className="list__title">Liste des series</h2>
    <div className="list__images">
      {series.map((serie) => (
        <Shows key={serie.id} {...serie} />
      ))}
    </div>
  </div>
);

List.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default List;
// ben@gmail.co
