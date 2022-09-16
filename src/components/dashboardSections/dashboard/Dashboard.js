import IMG1 from "../../../assets/office.jpg";
import IMG2 from "../../../assets/1104819.jpg";
import IMG3 from "../../../assets/calendar.jpg";

const Dashboard = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 mt-7">
      <div className="mx-auto my-5">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={IMG1} alt="" />
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
          <img className="rounded-t-lg" src={IMG2} alt="" />
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
          <img className="rounded-t-lg" src={IMG3} alt="" />
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
    </div>
  );
};

export default Dashboard;
