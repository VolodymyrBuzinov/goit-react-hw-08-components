import axios from 'axios';
import authActions from './authActions';

const BASE_URL = 'https://goit-phonebook-api.herokuapp.com/users';

const actionRegister = (name, email, password) => dispatch => {
  const item = {    
  name,
  email,
  password
  };

  dispatch(authActions.actionRegisterRequest());

  axios
    .post(BASE_URL, item)
    .then(({ data }) => dispatch(authActions.actionRegisterSuccess(data)))
    .catch(error => dispatch(authActions.actionRegisterError(error)));
};

const actionLogin = (email, password) => dispatch => {
  const item = {   
  email,
  password
  };

  dispatch(authActions.actionLoginRequest());

  axios
    .post(BASE_URL, item)
    .then(({ data }) => dispatch(authActions.actionLoginSuccess(data)))
    .catch(error => dispatch(authActions.actionLoginError(error)));
};

const actionLogout = (token) => dispatch => {
    const item = token;

    dispatch(authActions.actionLogoutRequest());
    
  axios
    .post(BASE_URL, item)
    .then(({ data }) => dispatch(authActions.actionLogoutSuccess(data)))
    .catch(error => dispatch(authActions.actionLogoutError(error)));
};

export default { actionRegister, actionLogin, actionLogout };