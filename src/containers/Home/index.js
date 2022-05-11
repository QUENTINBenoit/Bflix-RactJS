import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { fetchSeriesFromApi } from 'src/action/series';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch /* ownProps */) => ({
  fetchSeries: () => {
    dispatch(fetchSeriesFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
