import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

const initialState = {
  usuario: null,
  correo: null,
  role: null,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  // const [token, setToken] = useState(null);

  const AuthLogin = async (data) => {
    try {
      const { correo, contraseña } = data;
      let payload = JSON.stringify({ correo: correo, contraseña: contraseña });
      const API_URL = "http://localhost:3001/api/auth/login";
      await axios
        .post(API_URL, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          localStorage.setItem("token", data.data.data.token);
          // window.location.reload(false);
          setUser({
            ...initialState,
            usuario: data.data.data.user.usuario,
            correo: data.data.data.user.correo,
            role: data.data.data.user.role,
          });
        });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(user);
  const signOut = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
        AuthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
