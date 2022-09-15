import { Route, Routes } from "react-router-dom";
import Eventos from "../../components/dashboardSections/eventos/Eventos";
import Form from "../../pages/form/Form";
import EstadoReqCon from "../../pages/ModuloRequision/EstadoReqCon";
import RequisionM from "../../components/dashboardSections/requisicionM/RequisionM";
import { RequisionIC } from "../../components/dashboardSections/requisicionIC/RequisionIC";
import { EstadoReqUser } from "../../pages/ModuloRequision/EstadoReqUser";
import Dashboard from "../dashboardSections/dashboard/Dashboard";
import { EditarRequision } from "../../pages/ModuloRequision/EditarRequision";

const RouterPages = () => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/moduloreqmobiliario" element={<RequisionM />} />
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
          path="/moduloreqmobiliario/editreq"
          element={<EditarRequision />}
        />
        <Route path="/ModuloReqInvCompra" element={<RequisionIC />} />
        <Route path="/ModuloEventos" element={<Eventos />} />
      </Routes>
    </div>
  );
};

export default RouterPages;
