import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REQUEST_LOGIN,
} from "./actionTypes";

export const requestLogin = (payload) => ({
  type: REQUEST_LOGIN,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});
