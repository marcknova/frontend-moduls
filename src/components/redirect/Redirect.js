import Login from "../../pages/login/Login";
import Dashboard from "../dashboard/Dashboard";

export const Redirect = () => {
  const token = localStorage.getItem("token");
  return token ? <Dashboard /> : <Login />;
};
