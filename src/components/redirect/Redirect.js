import Login from "../../pages/login/Login";
import Dashboard from "../dashboard/Dashboard";

export const Redirect = () => {
  const userToken = localStorage.getItem("user-token");
  return userToken ? <Dashboard /> : <Login />;
};
