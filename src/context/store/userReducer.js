// import {
//   LOGIN_ERROR,
//   LOGIN_SUCCESS,
//   LOGOUT,
//   REQUEST_LOGIN,
// } from "./actionTypes";

export const initialState = {
  user: {},
  token: undefined,
  errorMessage: undefined,
  fetching: false,
};

export const reducer = (initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "REQUEST_LOGIN":
      return {
        user: { payload },
        token: false,
        errorMessage: false,
        fetching: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: payload,
        token: true,
        errorMessage: false,
        fetching: true,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
      };
    default:
      throw new Error("Error sensual :v");
  }
};
