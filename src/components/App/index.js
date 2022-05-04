// == Import npm
import React from 'react';

// == Import
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import List from 'src/components/List';
import Banner from '../Banner';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    { /* navbar */}
    <Nav />
    { /* banner */}

    <Banner />
    <List />
    <List />

    { /* footer */}
    <Footer />
  </div>
);

// == Export
export default App;
