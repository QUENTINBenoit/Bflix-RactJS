import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

// == Import
import Nav from 'src/containers/Nav';
import Home from 'src/containers/Home';
// import Footer from 'src/components/Footer';
// import List from 'src/containers/List';
// import Banner from 'src/containers/Banner';
// import Views from 'src/containers/Views';
import LoginForm from 'src/containers/LoginForm';
import './app.scss';

// == Composant/
const App = ({ isLogged }) => (
  <div className="app">
    <Nav isLogged={isLogged} />
    <Routes>
      {!isLogged && <Route path="/" element={<LoginForm />} />}
      {isLogged && <Route path="/" element={<Home />} />}
    </Routes>
  </div>
);

App.propTypes = {
  // fetchSeries: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: true,
};

// == Export
export default App;
