import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FormDetail } from "../../services/FormServices";
import InputEditar from "./InputEditar";

export const EditarRequision = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    FormDetail(location.state.id).then((data) => setData(data));
  }, [location.state.id]);

  console.log(data.data.data);

  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto flex flex-col">
        <div className="dark:text-white font-bold text-xl text-center my-7">
          <h1>Editar Requisicion</h1>
        </div>
        <div className="grid grid-cols-2 my-5">
          <InputEditar name="Nombre" value={data.data.data.nombre} />
          <InputEditar name="Apellido" value={data.data.data.apellido} />
          <InputEditar name="Celular" value={data.data.data.celular} />
          <InputEditar name="Extension" value={data.data.data.extension} />
          <InputEditar name="Correo" value={data.data.data.correo} />
          <InputEditar
            name="Departamento"
            value={data.data.data.departamento}
          />
          <InputEditar name="Puesto" value={data.data.data.puesto} />
        </div>
      </div>
    </div>
  );
};
