import React from 'react';
// import PropTypes from 'prop-types';

import covert from 'src/assets/images/imageTest.jpg';
import './banner.scss';

const Banner = () => (
  <header className="banner">
    <div className="banner__content">
      <h1 className="banner__title">Titre</h1>
      <p className="banner_description">
        toujours plus de nouvelles séries sur Netflix et il n'est pas toujours facile
        de faire le tri parmi les dizaines de créations originales de
        la plateforme. Que ce soit les grands succès historiques comme
      </p>
      <div className="banner__buttons">
        <button className="banner__button banner__button--play" type="button">Lecture</button>
        <button className="banner__button" type="button">Plus d'infos</button>
      </div>
    </div>

  </header>
);

Banner.propTypes = {
};
export default Banner;
