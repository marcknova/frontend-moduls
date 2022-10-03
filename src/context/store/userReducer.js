// import {
//   LOGIN_ERROR,
//   LOGIN_SUCCESS,
//   LOGOUT,
//   REQUEST_LOGIN,
// } from "./actionTypes";

export const initialState = {
  user: JSON.parse(localStorage.getItem("data")),
  token: localStorage.getItem("token"),
  error: localStorage.getItem("error"),
  isLoading: localStorage.getItem("isLoading"),
};

export const reducer = (initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "REQUEST_LOGIN":
      return {
        user: {},
        token: false,
        error: false,
        isLoading: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: localStorage.setItem(
          "data",
          JSON.stringify(payload.data.data.user)
        ),
        token: localStorage.setItem("token", payload.data.data.token),
        error: localStorage.setItem("error", false),
        isLoading: localStorage.setItem("isLoading", true),
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: localStorage.clear("data"),
        token: localStorage.clear("token"),
        error: localStorage.clear("error"),
        isLoading: localStorage.clear("isLoading"),
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        user: {},
        token: null,
        error: localStorage.setItem("error", true),
        isLoading: localStorage.setItem("isLoading", false),
      };
    default:
      throw new Error("Error sensual :v");
  }
};
