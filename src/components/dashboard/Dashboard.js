import { useLocation } from "react-router-dom";
import { LateralBar } from "../LateralBar/LateralBar";
import Navbar from "../navbar/Navbar";
import RouterPages from "../../routes/RouterPages";

export default function Dashboard() {
  const location = useLocation();
  return (
    <div className="flex bg-slate-50 dark:bg-neutral-800">
      <LateralBar />
      <div className="w-full">
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div>
          <div className="p-3">
            <h1 className="ml-5">
              <span className="font-semibold text-lg dark:text-white">
                Dashboard
              </span>
              {location.state ? (
                <p className="text-sm dark:text-gray-400">
                  Home - {location.state.name}
                </p>
              ) : (
                <p className="text-sm dark:text-gray-400">Home - Dashboard</p>
              )}
            </h1>
          </div>
        </div>
        <div>
          <RouterPages />
        </div>
      </div>
    </div>
  );
}
