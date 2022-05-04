import { connect } from 'react-redux';
import Views from 'src/components/Views';
import { viewsSettings } from '../../action';

const mapStateToProps = (state) => ({
  isCloseViews: state.isSettingsCloseViews,
});

const mapDispatchToProps = (dispatch) => ({
  viewsToggle: () => {
    console.log('coucou ca fonctionne bien');
    dispatch(viewsSettings());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Views);
