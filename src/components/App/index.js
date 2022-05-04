// == Import npm
import React from 'react';

// == Import
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import List from 'src/components/List';
import Banner from 'src/containers/Banner';
import Views from 'src/containers/Views';
import './app.scss';

// == Composant
const App = () => (
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

// == Export
export default App;
