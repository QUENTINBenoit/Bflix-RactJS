import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './login.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  // isLogged,
  // handleLogout,

  // loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {/* {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )} */}
      (

      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          OK
        </button>
      </form>
      )
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  // isLogged: PropTypes.bool,
  // handleLogout: PropTypes.func.isRequired,

  // loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  // isLogged: false,
  // loggedMessage: 'Connecté',
};

export default LoginForm;
