import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import './views.scss';

const Views = ({ isCloseViews, viewsToggle }) => (
  <div className={isCloseViews ? 'views' : 'views open'}>
    <div className="views__banner">
      <div className="views__content">
        <h3 className="views__title">Titre</h3>
        <p>
          Description de la description du projet B'flix
          enfin bref ce texte n'est que du texte...
          Description de la description du projet B'flix
          enfin bref ce texte n'est que du texte...
          Description de la description du projet B'flix
          enfin bref ce texte n'est que du texte...
        </p>
      </div>
      <button
        type="button"
        className="views__close"
        onClick={viewsToggle}
      >
        <CancelIcon />
      </button>
    </div>
  </div>
);

Views.propTypes = {
  isCloseViews: PropTypes.bool.isRequired,
  viewsToggle: PropTypes.func.isRequired,
};
export default Views;
