import { connect } from 'react-redux';

import Nav from 'src/components/Nav';
import { toggleSettings } from '../../action';

const mapStateToProps = (state) => {
  console.log(state.isSettingClose);
  return ({
    isClose: state.isSettingClose,
  });
};
const mapDispatchToProps = (dispatch) => ({
  manageToggle: () => {
    console.log('je veux inersé l\'etat de mon composant');
    dispatch(toggleSettings());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
