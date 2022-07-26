import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/usercontext/UserContext";

const RequisionM = () => {
  const { user } = useContext(AuthContext);
  const notify = () =>
    toast.error("No tienes permisos para acceder a esta ventana", {
      duration: 4000,
      position: "top-right",
    });
  return (
    <>
      <div className="md:w-[45%] w-full mx-5">
        <div className="max-w-lg my-8 rounded-lg bg-white border dark:bg-neutral-900 border-gray-200 dark:border-none shadow-lg ml-auto mr-auto h-[72%]">
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">
              Solicitar Requisicion
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-400">
              Elaboracion de formulario para poder realizar una Requisicion de
              Mobiliario y que pueda ser procesada mas adelante.
            </p>
            <Link
              to="/moduloreqmobiliario/reqmobiliario"
              state={{ name: "Modulo de Requisicion" }}
              className="inline-flex items-end py-2 px-3 text-sm font-medium text-center text-white bg-[#009EF7] rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continuar
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-[45%] w-full mx-5">
        <div className="max-w-lg my-8 rounded-lg bg-white border dark:bg-neutral-900 border-gray-200 dark:border-none shadow-lg ml-auto mr-auto h-[72%]">
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">
              Seguimiento de Requisicion (Contador)
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-400">
              Seguimiento y validacion de Requisicion propuesta por el usuario
              que sera manejada por el contador a cargo de las requisiciones
            </p>
            {user.user.role === "contador" || user.user.role === "admin" ? (
              <Link
                to="/moduloreqmobiliario/estadoreqcont"
                state={{ name: "Modulo de Requisicion" }}
                className="inline-flex items-end py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continuar
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            ) : (
              <button
                className="inline-flex items-end py-2 px-3 text-sm font-medium text-center text-white bg-[#009EF7] rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={notify}
              >
                Info
              </button>
            )}
            <Toaster />
          </div>
        </div>
      </div>
      <div className="md:w-[45%] w-full mx-5">
        <div className="max-w-lg my-8 rounded-lg bg-white border dark:bg-neutral-900 border-gray-200 dark:border-none shadow-lg ml-auto mr-auto h-[72%]">
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">
              Estado de las requisiciones
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-400">
              Estado de cada una de las requisiciones que se han ido
              solicitando, se puede verificar si a sido aceptada/rechazada por
              el contador
            </p>
            <Link
              to="/moduloreqmobiliario/estadorequser"
              state={{ name: "Modulo de Requisicion" }}
              className="inline-flex items-end py-2 px-3 text-sm font-medium text-center text-white bg-[#009EF7] rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continuar
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequisionM;
