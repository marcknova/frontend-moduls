import axios from "axios";
import { createContext } from "react";
export const AuthContext = createContext();

// const initialState = {
//   usuario: null,
//   correo: null,
//   role: null,
// };

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(initialState);
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
        });
    } catch (e) {
      console.log(e);
    }
  };

  // const signOut = () => {
  //   window.location.reload(false);
  // };

  return (
    <AuthContext.Provider
      value={{
        // signOut,
        AuthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
