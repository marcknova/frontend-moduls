import { useEffect, useState } from "react";
import { ListAllForms } from "../../../services/FormServices/FormServices";

export const EstadoReqUser = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    ListAllForms().then((data) => setDatos(data.data.data));
  }, []);
  return (
    <div className="overflow-x-auto">
      <div className="my-7">
        <h1 className="font-bold text-2xl dark:text-white text-black text-center">
          Estado de las Requisiciones
        </h1>
      </div>
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-900 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Nombre
              </th>
              <th scope="col" className="py-3 px-6">
                Apellido
              </th>
              <th scope="col" className="py-3 px-6">
                Correo
              </th>
              <th scope="col" className="py-3 px-6">
                Estatus
              </th>
            </tr>
          </thead>
          <tbody>
            {datos.map((data) => (
              <tr key={data.id_req} className="border-b dark:border-white">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-white"
                >
                  {data.id_req}
                </th>
                <td className="py-4 px-6">{data.nombre}</td>
                <td className="py-4 px-6">{data.apellido}</td>
                <td className="py-4 px-6">{data.correo}</td>
                <td className="py-4 px-6">{data.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
