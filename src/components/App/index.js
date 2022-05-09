// == Import npm
import React, { useEffect } from 'react';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import List from 'src/containers/List';
import Banner from 'src/containers/Banner';
import Views from 'src/containers/Views';
import './app.scss';

// == Composant
function App({ fetchSeries }) {
  useEffect(
    fetchSeries,
    [],
  );

  return (
    <div className="app">
      { /* navbar */}
      <Nav />
      { /* banner */}

      <Banner />
      <Views />
      <List />
      <List />

      { /* footer */}
      <Footer />
    </div>
  );
}
App.propTypes = {

  fetchSeries: PropTypes.func.isRequired,
};
// == Export
export default App;
