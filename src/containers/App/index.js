import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchSeriesFromApi } from 'src/action/series';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSeries: () => {
    dispatch(fetchSeriesFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
