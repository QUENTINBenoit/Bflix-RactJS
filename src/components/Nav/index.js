import React from 'react';
import PropTypes from 'prop-types';

// import logo from 'src/assets/images/Netflix.png';
import avatar from 'src/assets/images/avataaars.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import classnames from 'classnames';
import './nav.scss';

const Nav = ({ isClose, manageToggle, isLogged }) => (
  <nav className={isClose ? 'nav  ' : 'nav show'}>
    <button
      className="nav__burger"
      type="button"
      onClick={manageToggle}
    >
      <MenuIcon />
    </button>

    <div className="nav__logo">
      B'Flix
    </div>

    <div className="nav__links ">
      <a href="/" className="nav__link"> Accueil</a>
      <a href="/" className="nav__link"> Serie</a>
      <a href="/" className="nav__link"> Films</a>
    </div>

    <div className="nav__actions">
      <a href="/" className="nav__action"> <SearchIcon /></a>
      <a href="/" className="nav__action"> name</a>

      {isLogged && (

        <button
          type="button"
          className="button"
        // onClick={handleLogout}
        >
          Déconnexion
        </button>
      )}
    </div>

    <img src={avatar} className="nav__avatar" alt="avatar" />
  </nav>
);

Nav.propTypes = {
  isClose: PropTypes.bool.isRequired,
  manageToggle: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
export default Nav;
