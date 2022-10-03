import { useContext } from "react";
import { AuthContext } from "../../context/usercontext/UserContext";
import Login from "../../pages/login/Login";
import Dashboard from "../dashboard/Dashboard";

export const Redirect = () => {
  const { user } = useContext(AuthContext);
  return user.token ? <Dashboard /> : <Login />;
};
