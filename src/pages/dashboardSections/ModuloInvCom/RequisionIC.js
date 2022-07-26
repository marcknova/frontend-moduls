import { Link } from "react-router-dom";

export const RequisionIC = () => {
  return (
    <>
      <div className="md:w-[45%] w-full mx-5">
        <div className="max-w-lg my-8 rounded-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-none shadow-lg ml-auto mr-auto h-[72%]">
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
              state={{ name: "Modulo de Inventario Compra" }}
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
          </div>
        </div>
      </div>
      <div className="md:w-[45%] w-full mx-5">
        <div className="max-w-lg my-8  rounded-lg bg-white border dark:bg-neutral-900 border-gray-200 dark:border-none shadow-lg ml-auto mr-auto h-[72%]">
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">
              Seguimiento de Requisicion Primera Fase
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-400">
              Seguimiento y validacion de Requisicion propuesta por el usuario
              que sera manejada por el contador a cargo de las requisiciones
            </p>
            <a
              href="www.google.com"
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
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-[45%] w-full mx-5">
        <div className="max-w-lg my-8 rounded-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-none shadow-lg ml-auto mr-auto h-[72%]">
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">
              Estado de las requisiciones
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-400">
              Estado de cada una de las requisicionesque se han ido solicitando,
              se puede verificar si la requision continua en proceso de revision
              o a sido aceptada/rechazada por el contador
            </p>
            <a
              href="www.google.com"
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
