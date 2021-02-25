import { createAction } from '@reduxjs/toolkit'


const actionRegisterRequest = createAction('phonebook/RegisterRequest');
const actionRegisterSuccess = createAction('phonebook/RegisterSuccess');
const actionRegisterError = createAction('phonebook/RegisterError');
const actionLoginRequest = createAction('phonebook/LoginRequest');
const actionLoginSucess = createAction('phonebook/LoginSucess');
const actionLoginError = createAction('phonebook/LoginError');
const actionLogoutRequest = createAction('phonebook/LogoutRequest');
const actionLogoutSucess = createAction('phonebook/LogoutSucess');
const actionLogoutError = createAction('phonebook/LogoutError');


export default {actionRegisterRequest, actionRegisterSuccess, actionRegisterError, actionLoginRequest, actionLoginSucess, actionLoginError, actionLogoutRequest, actionLogoutSucess, actionLogoutError}