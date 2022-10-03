import axios from "axios";
import { useReducer, useState } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../store/userReducer";
export const AuthContext = createContext();

// const initialState = {
//   user: JSON.parse(localStorage.getItem("data")),
//   token: localStorage.getItem("token"),
//   error: localStorage.getItem("error"),
//   isLoading: localStorage.getItem("isLoading"),
// };

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(state);

  async function AuthLogin(data) {
    try {
      dispatch({ type: "REQUEST_LOGIN" });
      const { correo, contraseña } = data;
      let payload = JSON.stringify({ correo, contraseña });
      const API_URL = "http://localhost:3001/api/auth/login";
      await axios
        .post(API_URL, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          dispatch({ type: "LOGIN_SUCCESS", payload: data });
          window.location.reload(false);
        });
    } catch (e) {
      dispatch({ type: "LOGIN_ERROR" });
    }
  }

  const signOut = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload(false);
  };

  return (
    <AuthContext.Provider value={{ user, AuthLogin, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
