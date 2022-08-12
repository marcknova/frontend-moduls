import "./LateralBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const LateralBar = () => {
  const [open, setOpen] = useState(false);
  let activeStyle = {
    width: "100%",
    backgroundColor: "#000000",
    display: block,
    color: "#FFFFFF",
  };

  return (
    <div className="w-1/4 ">
      <nav className="w-full bg-neutral-800 h-auto p-5 border-dashed border-b-[1px] border-white text-white">
        Imagen mamalona
      </nav>
      <div className="h-screen bg-neutral-800 text-white">
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className="sidebar-title" onClick={() => setOpen(!open)}>
            <h1>
              <i className="fa-solid fa-cube mx-2"></i>
              <span>Dashboard</span>
            </h1>
            <i className="fa-solid fa-angle-down mr-4 mt-1"></i>
          </div>
          <div className="sidebar-content">
            <ul className="text-sm py-1 px-3 list-disc">
              <li className="list-disc my-1 p-1 text-gray-400 hover:text-white">
                <NavLink
                  to="/ModuloReqMobiliario"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="bg-black "
                >
                  Modulo Requisiciones de Mobiliario
                </NavLink>
              </li>
              <li className="list-disc my-1 p-1 text-gray-400 hover:text-white">
                <NavLink
                  to="/ModuloReqInvCompra"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Modulo Requisiciones Inventario/compra
                </NavLink>
              </li>
              <li className="list-disc my-1 p-1 text-gray-400 hover:text-white">
                <NavLink
                  to="/ModuloEventos"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Modulo De Eventos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 

https://codesandbox.io/s/hh9g3?file=/src/Aside.js
*/
