import { useEffect, useState } from "react";
import { ListAllForms } from "../../services/FormServices";

export const EstadoReqUser = () => {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const userToken = localStorage.getItem("user-token");

    const config = {
      headers: { Authorization: `bearer ${userToken}` },
    };
    ListAllForms(config).then((data) => {
      setError(true);
      setDatos(data);
    });
  }, []);
  if (error) {
    return (
      <div className="overflow-x-auto">
        <div className="dark:text-white font-bold text-xl text-center my-7">
          <h1>Solicitudes Realizadas</h1>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-white p-3 my-5">
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
            {datos.data.data.map((dato) => (
              <tr
                key={dato.id_req}
                className="bg-white border-b dark:bg-neutral-800 dark:border-white"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {dato.id_req}
                </th>
                <td className="py-4 px-6">{dato.nombre}</td>
                <td className="py-4 px-6">{dato.apellido}</td>
                <td className="py-4 px-6">{dato.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};
