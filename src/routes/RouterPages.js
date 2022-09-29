import { Route, Routes } from "react-router-dom";
import Eventos from "../pages/dashboardSections/eventos/Eventos";
import Form from "../components/form/Form";
import EstadoReqCon from "../pages/dashboardSections/ModuloRequision/EstadoReqCon";
import RequisionM from "../pages/dashboardSections/ModuloRequision/RequisionM";
import { RequisionIC } from "../pages/dashboardSections/ModuloInvCom/RequisionIC";
import { EstadoReqUser } from "../pages/dashboardSections/ModuloRequision/EstadoReqUser";
import Dashboard from "../pages/dashboardSections/dashboard/Dashboard";
import { EditarRequision } from "../pages/dashboardSections/ModuloRequision/EditarRequision";
// import Login from "../../pages/login/Login";

const RouterPages = () => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/authentication/layout/sign-in" element={<Login />} /> */}
        <Route path="/ModuloReqMobiliario" element={<RequisionM />} />
        <Route path="/moduloreqmobiliario/reqmobiliario" element={<Form />} />
        <Route
          path="/moduloreqmobiliario/estadoreqcont"
          element={<EstadoReqCon />}
        />
        <Route
          path="/moduloreqmobiliario/estadorequser"
          element={<EstadoReqUser />}
        />
        <Route
          path="/moduloreqmobiliario/editar-req"
          element={<EditarRequision />}
        />
        <Route path="/ModuloReqInvCompra" element={<RequisionIC />} />
        <Route path="/ModuloEventos" element={<Eventos />} />
      </Routes>
    </div>
  );
};

export default RouterPages;
