import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Footer from 'src/components/Footer';
import List from 'src/containers/List';
import Banner from 'src/containers/Banner';
import Views from 'src/containers/Views';
// import './home.scss';

const Home = ({ fetchSeries }) => {
  useEffect(
    fetchSeries,
    [],
  );
  return (
    <div className="home">
      <Banner />
      <Views />
      <List />
      <Footer />
    </div>
  );
};

Home.propTypes = {
  fetchSeries: PropTypes.func.isRequired,
};
export default Home;
