import { useLocation } from "react-router-dom";
import { LateralBar } from "../LateralBar/LateralBar";
import Navbar from "../navbar/Navbar";
import RouterPages from "./RouterPages";

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="flex bg-slate-50">
      <LateralBar />
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div>
          <div className="p-3">
            <h1 className="ml-5">
              <span className="font-semibold text-lg">Dashboard</span>
              {location.state ? (
                <p className="text-sm">Home - {location.state.name}</p>
              ) : (
                <p className="text-sm">Home - Dashboard</p>
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
