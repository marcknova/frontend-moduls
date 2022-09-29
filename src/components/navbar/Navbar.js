import { useState } from "react";
import Toggle from "../../context/darkmode/Toogle";
import { MenuUser } from "./menuUser/MenuUser";
import PP from "./PP.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-500 dark:bg-neutral-900 flex h-auto p-[0.70rem]">
      <nav className="w-full text-white">
        <ul className="flex flex-row justify-end">
          <li className="mx-2 my-auto dark:hover:bg-neutral-800 dark:hover:text-blue-500 rounded-md p-2 cursor-pointer">
            <i className="fa-solid fa-magnifying-glass text-xl"></i>
          </li>
          <li className="mx-2 my-auto dark:hover:bg-neutral-800 rounded-md px-1 py-[0.10rem] cursor-pointer">
            <Toggle />
          </li>
          <li className="mx-[0.60rem] cursor-pointer">
            <div className={open ? "select-menu active" : "select-menu"}>
              <div className="w-12 h-12 border-[1px] border-white rounded">
                <img
                  src={PP}
                  className="w-full h-full"
                  alt=""
                  onClick={() => setOpen(!open)}
                />
              </div>
              <MenuUser />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
