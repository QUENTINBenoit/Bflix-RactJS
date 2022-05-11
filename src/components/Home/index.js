import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Footer from 'src/components/Footer';
import List from 'src/containers/List';
import Banner from 'src/containers/Banner';
import Views from 'src/containers/Views';
// import './home.scss';

const Home = ({ fetchSeries, series }) => {
  console.log(`de benoit pour voir mon json ${series}`);
  useEffect(
    fetchSeries,
    [],
  );

  return (
    <div className="home">
      <Banner />
      <Views />
      {
        series.map(
          (serie) => <List key={serie.id} {...serie} />,
        )
      }
      <Footer />
    </div>
  );
};

Home.propTypes = {
  fetchSeries: PropTypes.func.isRequired,
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Home;
// ben@gmail.com
