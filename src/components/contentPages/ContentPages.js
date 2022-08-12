import { Routes, Route } from "react-router-dom";
import { EditarRequision } from "../../pages/ModuloRequision/EditarRequision";
import { EstadoReqUser } from "../../pages/ModuloRequision/EstadoReqUser";
import { RequisionMobiliario } from "../../pages/ModuloRequision/RequisionMobiliario";

export const ContentPages = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/ReqMobiliario" element={<RequisionMobiliario />} />
          <Route path="/EditMobiliario" element={<EditarRequision />} />
          <Route path="/StateMobiliario" element={<EstadoReqUser />} />
        </Routes>
      </div>
    </>
  );
};
