import React from 'react';
// import PropTypes from 'prop-types';


import logo from 'src/assets/images/Netflix.png';
import avatar from 'src/assets/images/avataaars.png';


import './nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Nav = () => (
  <nav className="nav  show">
    <button
      className="nav__burger"
      type="button"
    >
      <MenuIcon />
    </button>
    <img src={logo} className="nav__logo" alt="logo-netflix" />

    <div className="nav__links">
      <a href="/" className="nav__link"> Accueil</a>
      <a href="/" className="nav__link"> Serie</a>
      <a href="/" className="nav__link"> Films</a>
    </div>

    <div className="nav__actions">
      <a href="/" className="nav__action"> <SearchIcon /></a>
      <a href="/" className="nav__action"> name</a>
    </div>

    <img src={avatar} className="nav__avatar" alt="avatar" />
  </nav>

);

// Nav; propTypes = {
// };
export default Nav;
