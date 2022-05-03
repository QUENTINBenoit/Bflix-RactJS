// == Import npm
import React from 'react';

// == Import
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import Test from 'src/components/Test';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    { /* navbar */}
    <Nav />
    { /* banner */}
    <Test />
    { /* rows */}

    { /* footer */}
    <Footer />
  </div>
);

// == Export
export default App;
