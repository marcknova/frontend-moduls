import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  isLogin: false,
  token: null,
  usuario: null,
  correo: null,
  role: null,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const AuthLogin = async (data) => {
    try {
      const { correo, contraseña } = data;
      let payload = JSON.stringify({ correo: correo, contraseña: contraseña });
      const API_URL = "http://localhost:3001/api/auth/login";
      const res = await axios.post(API_URL, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUser({
        ...user,
        isLogin: true,
        token: res.data.data.token,
        usuario: res.data.data.user.usuario,
        correo: res.data.data.user.correo,
        role: res.data.data.user.role,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        AuthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
