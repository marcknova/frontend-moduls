import IMG1 from "../../../assets/office.jpg";
import IMG2 from "../../../assets/1104819.jpg";
import IMG3 from "../../../assets/calendar.jpg";
import IMG4 from "../../../assets/adminwallpaper.webp";
import { useContext } from "react";
import { AuthContext } from "../../../context/usercontext/UserContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 mt-7">
      <div className="mx-auto my-5">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-gray-700">
          <div className="h-[18rem]">
            <img className="rounded-t-lg w-full h-full" src={IMG1} alt="" />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Modulo de Requisiciones
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-5">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-gray-700">
          <div className="h-[18rem]">
            <img className="rounded-t-lg w-full h-full" src={IMG2} alt="" />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Modulo Inventario y Compra
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-5">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-gray-700">
          <div className="h-[18rem]">
            <img className="rounded-t-lg w-full h-full" src={IMG3} alt="" />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Modulo de Eventos
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              {/* far, in reverse chronological order. */}
            </p>
          </div>
        </div>
      </div>
      {user.user.role === "admin" ? (
        <div className="mx-auto my-5">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-gray-700">
            <div className="h-[18rem]">
              <img className="rounded-t-lg w-full h-full" src={IMG4} alt="" />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Administrador de Usuarios
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Session para el admin, podra agregar, editar o eliminar usuarios
                del sistema
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
