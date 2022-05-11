import { connect } from 'react-redux';
import List from 'src/components/List';

const mapStateToProps = (state) => ({
  series: state.series,

});

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps, /* mapDispatchToProps */)(List);
