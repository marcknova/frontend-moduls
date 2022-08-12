import { useEffect, useState } from "react";

export const EstadoReqUser = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost/modulos/")
      .then((json) => json.json())
      .then((data) => setDatos(data));
  }, []);

  return (
    // <div>
    //   {datos.map((data) => (
    //     <div key={data.id}>
    //       <h1>{data.nombre}</h1>
    //       <h1>{data.apellido}</h1>
    //       <h1>{data.correo}</h1>
    //     </div>
    //   ))}
    // </div>

    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              ID
            </th>
            <th scope="col" class="py-3 px-6">
              Nombre
            </th>
            <th scope="col" class="py-3 px-6">
              Apellido
            </th>
            <th scope="col" class="py-3 px-6">
              Correo
            </th>
            <th scope="col" class="py-3 px-6">
              Estatus
            </th>
          </tr>
        </thead>
        <tbody>
          {datos.map((data) => (
            <tr
              key={data.id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.id}
              </th>
              <td class="py-4 px-6">{data.nombre}</td>
              <td class="py-4 px-6">{data.apellido}</td>
              <td class="py-4 px-6">{data.correo}</td>
              <td class="py-4 px-6">{data.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
