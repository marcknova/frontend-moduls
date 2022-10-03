import axios from "axios";
export default async function AuthLogin(data) {
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
        console.log("Aqui estan los datos del usuario", data.data.data.user);
        console.log("Aqui esta el token sensual", data.data.data.token);
        // localStorage.setItem("token", data.data.data.token);
        // localStorage.setItem("data", { data: data.data.data.user });
        // window.location.reload(false);
      });
  } catch (e) {
    console.log(e);
  }
}
