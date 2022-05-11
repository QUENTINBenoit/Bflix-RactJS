// import { Password } from '@mui/icons-material';
import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeUserField, loginUser } from '../../action/user';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  isLogged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: function (value, name) {
    // console.log(`change field ${name} with value : ${value}`);
    // console.log(name);
    dispatch(changeUserField(value, name));
  },
  handleLogin: function () {
    // console.log('login de benoit ');
    dispatch(loginUser());
  },
  // handleLogout: function () {
  //   console.log('logout');
  // },
  // ben@gmail.com
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
