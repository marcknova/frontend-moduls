import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/usercontext/UserContext";

export default async function AuthLogin(data) {
  const { setUser } = useContext(AuthContext);
  try {
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
        console.log(data);
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("data", { data: data.data.data.user });
        // window.location.reload(false);
      });
  } catch (e) {
    console.log(e);
  }
}
