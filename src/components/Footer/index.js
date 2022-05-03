import React from 'react';
// import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__socials">
        <a href="/" className="footer__social">
          <FacebookIcon />
        </a>
        <a href="/" className="footer__social">
          <InstagramIcon />
        </a>
        <a href="/" className="footer__social">
          <YouTubeIcon />
        </a>
        <a href="/" className="footer__social">
          <FlutterDashOutlinedIcon />
        </a>
      </div>
      <ul className="footer__links">
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
        <li className=" footer__link">
          <a href="/"> Lien Footer</a>
        </li>
      </ul>
      <div className="footer__copy"> B'flix Clone - tous  droits réservés</div>
    </div>
  </footer>
);

// Footer; propTypes = {
// };
export default Footer;
