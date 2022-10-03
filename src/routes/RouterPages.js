import { Route, Routes } from "react-router-dom";
import Eventos from "../pages/dashboardSections/eventos/Eventos";
import Form from "../components/form/Form";
import EstadoReqCon from "../pages/dashboardSections/ModuloRequision/EstadoReqCon";
import RequisionM from "../pages/dashboardSections/ModuloRequision/RequisionM";
import { RequisionIC } from "../pages/dashboardSections/ModuloInvCom/RequisionIC";
import { EstadoReqUser } from "../pages/dashboardSections/ModuloRequision/EstadoReqUser";
import Dashboard from "../pages/dashboardSections/dashboard/Dashboard";
import { EditarRequision } from "../pages/dashboardSections/ModuloRequision/EditarRequision";
import { useContext } from "react";
import { AuthContext } from "../context/usercontext/UserContext";
// import Login from "../pages/login/Login";
import { ProtectedRoute } from "../components/protectedRouter/ProtectedRoute";

const RouterPages = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full flex flex-wrap justify-center">
      <Routes>
        {/* <Route index element={<Login />} />
        <Route path="/authentication" element={<Login />} /> */}

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ModuloReqMobiliario" element={<RequisionM />} />
          <Route path="/ModuloReqInvCompra" element={<RequisionIC />} />
          <Route path="/ModuloEventos" element={<Eventos />} />
          <Route path="/moduloreqmobiliario/reqmobiliario" element={<Form />} />
          <Route
            path="/moduloreqmobiliario/estadorequser"
            element={<EstadoReqUser />}
          />
        </Route>

        <Route
          path="/moduloreqmobiliario/editar-req"
          element={
            <ProtectedRoute
              redirectTo="/"
              isAllowed={!!user && user.user.role === "contador"}
            >
              <EditarRequision />
            </ProtectedRoute>
          }
        />

        <Route
          path="/moduloreqmobiliario/estadoreqcont"
          element={
            <ProtectedRoute
              redirectTo="/"
              isAllowed={!!user && user.user.role === "contador"}
            >
              <EstadoReqCon />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default RouterPages;
