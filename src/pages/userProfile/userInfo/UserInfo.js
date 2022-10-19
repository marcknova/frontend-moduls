import React, { useContext } from "react";
import ProfileUser from "../../../components/Profile/ProfileUser";
import { AuthContext } from "../../../context/usercontext/UserContext";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="w-full h-full">
      <div className="w-full h-full mt-4 mb-5">
        <ProfileUser props={user} />
        <div className="dark:border-[0.1px] dark:border-black shadow-lg dark:shadow-none w-[85%] rounded-lg m-auto dark:bg-neutral-900">
          <div className="p-5 border-b-[1px] border-blue-50">
            <h1 className="dark:text-white font-bold">Detalles de Usuario</h1>
          </div>
          <div className="flex dark:text-white p-5">
            <div className="w-[40%]">
              <div className="py-2">Full Name</div>
              <div className="py-2">Celular</div>
              <div className="py-2">Edad</div>
              <div className="py-2">Correo</div>
              <div className="py-2">Role</div>
              <div className="py-2">Allow Changes</div>
            </div>
            <div className="w-[60%]">
              <div className="py-2">{user.user.nombre}</div>
              <div className="py-2">{user.user.telefono}</div>
              <div className="py-2">{user.user.edad}</div>
              <div className="py-2">{user.user.correo}</div>
              <div className="py-2">{user.user.role}</div>
              <div className="py-2">Yes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
