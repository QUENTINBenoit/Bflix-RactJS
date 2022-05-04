import { connect } from 'react-redux';
import Banner from 'src/components/Banner';
import { viewsSettings } from '../../action';

const mapStateToProps = (state) => ({
  isCloseViews: state.isSettingsCloseViews,
});

const mapDispatchToProps = (dispatch) => ({
  viewsToggle: () => {
    console.log('coucou info');
    dispatch(viewsSettings());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
