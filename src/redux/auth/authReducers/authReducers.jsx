import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../authActions/authActions';

const user = createReducer(
  {},
  {
    [authActions.actionRegisterSuccess]: (state, { type, payload }) =>
      payload.user,
    [authActions.actionLoginSuccess]: (state, { type, payload }) =>
      payload.user,
  },
);
const token = createReducer(
  {},
  {
    [authActions.actionRegisterSuccess]: (state, { type, payload }) =>
      payload.token,
    [authActions.actionLoginSuccess]: (state, { type, payload }) =>
      payload.token,
  },
);

const isAuthorised = createReducer(false, {
  [authActions.actionRegisterRequest]: () => false,
  [authActions.actionRegisterSuccess]: () => true,
  [authActions.actionRegisterError]: () => false,
  [authActions.actionLoginRequest]: () => false,
  [authActions.actionLoginSuccess]: () => true,
  [authActions.actionLoginError]: () => false,
  [authActions.actionLogoutRequest]: () => true,
  [authActions.actionLogoutSuccess]: () => false,
  [authActions.actionLogoutError]: () => true,
});

const error = createReducer(false, {
  [authActions.actionRegisterRequest]: () => false,
  [authActions.actionRegisterSuccess]: () => false,
  [authActions.actionRegisterError]: () => true,
  [authActions.actionLoginRequest]: () => false,
  [authActions.actionLoginSuccess]: () => false,
  [authActions.actionLoginError]: () => true,
  [authActions.actionLogoutRequest]: () => false,
  [authActions.actionLogoutSuccess]: () => false,
  [authActions.actionLogoutError]: () => true,
});

export default combineReducers({
  user,
  token,
  isAuthorised,
  error,
});
