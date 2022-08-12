import { LateralBar } from "../LateralBar/LateralBar";
import Navbar from "../navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import RequisionM from "../../components/dashboardSections/requisicionM/RequisionM";
import { RequisionIC } from "../../components/dashboardSections/requisicionIC/RequisionIC";
import Eventos from "../../components/dashboardSections/eventos/Eventos";
import RequisionMobiliario from "../../pages/ModuloRequision/RequisionMobiliario";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-50">
      <LateralBar />
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div>
          <div className="p-3">
            <h1 className="ml-5">
              <span className="font-semibold text-lg">Dashboard</span>
              <p className="text-sm">Home - Dashboard</p>
            </h1>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-wrap">
            <Routes>
              <Route path="/ModuloReqMobiliario" element={<RequisionM />} />
              <Route
                path="/moduloreqmobiliario/reqmobiliario"
                element={<RequisionMobiliario />}
              />
              <Route path="/ModuloReqInvCompra" element={<RequisionIC />} />
              <Route path="/ModuloEventos" element={<Eventos />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
