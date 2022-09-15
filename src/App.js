import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Login from "./pages/login/Login";
// import Dashboard from "./components/dashboard/Dashboard";
import { AuthContext } from "./context/UserContext";
import { useContext } from "react";
import { Redirect } from "./components/redirect/Redirect";

function App() {
  const { user } = useContext(AuthContext);
  return <Redirect user={user} />;
}

export default App;

// http://localhost:3001/api/auth/login
// "correo": "susu@gmail.com",
// "contraseña": "susu123"
// https://codesandbox.io/s/login-flow-w-react-context-api-p9j96?file=/src/App.js
