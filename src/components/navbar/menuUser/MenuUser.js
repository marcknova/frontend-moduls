import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import PP from "../PP.png";
import "./MenuUser.css";

export const MenuUser = () => {
  const { signOut } = useContext(AuthContext);
  const data = localStorage.getItem("data");
  const dataUser = JSON.parse(data);

  return (
    <div className="container-user absolute hidden bg-white w-auto text-black dark:bg-neutral-900 dark:text-white h-auto rounded-md shadow-lg top-[4.4rem] right-5 options">
      <div className="user flex flex-row p-3 border-b-[1px] border-gray-400">
        <div className="w-16 h-16 m-1">
          <img src={PP} className="w-full h-full" alt="" />
        </div>
        <div className="mt-3 p-2 m-1 mr-10">
          <h1 className="text-lg font-bold -mb-[8px]">{dataUser.usuario}</h1>
          <span className="text-xs">{dataUser.correo}</span>
        </div>
      </div>
      <div className="content-items">
        <div className="opciones rounded-md hover:dark:bg-neutral-800 hover:bg-slate-50 hover:text-blue-500">
          <h1>Perfil</h1>
        </div>
        <div className="opciones rounded-md hover:dark:bg-neutral-800 hover:bg-slate-50 hover:text-blue-500">
          <h1>Configuracion De Perfil</h1>
        </div>
        <div className="opciones rounded-md hover:dark:bg-neutral-800 hover:bg-slate-50 hover:text-blue-500">
          <h1 onClick={signOut}>Cerrar Sesion</h1>
        </div>
      </div>
    </div>
  );
};
