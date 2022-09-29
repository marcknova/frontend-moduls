import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListAllForms } from "../../../services/FormServices/FormServices";

export default function EstadoReqCon() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    ListAllForms(config).then((data) => setDatos(data.data.data));
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
                Telefono
              </th>
              <th scope="col" className="py-3 px-6">
                Editar
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
                <td className="py-4 px-6">{data.celular}</td>
                <td className="py-4 px-6 text-center">
                  <Link to="/moduloreqmobiliario/editar-req">
                    <i className="fa-solid fa-pen-to-square text-xl"></i>
                  </Link>
                </td>
                <td className="py-4 px-6">Pendiente</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
