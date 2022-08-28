// import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../components/context/UserContext";

// export const AuthLogin = async () => {
//   try {
//     const { correo, contraseña } = user;
//     let payload = JSON.stringify({ correo: correo, contraseña: contraseña });
//     const API_URL = "http://localhost:3001/api/auth/login";
//     const res = await axios.post(API_URL, payload, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return res;
//   } catch (e) {
//     console.log(e);
//   }
// };
