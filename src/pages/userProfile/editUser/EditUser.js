// import { Field, Form, Formik } from "formik";
import React, { useContext, useRef, useState } from "react";
import ProfileUser from "../../../components/Profile/ProfileUser";
import { AuthContext } from "../../../context/usercontext/UserContext";

const EditUser = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState(false);
  const { user } = useContext(AuthContext);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const ageRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      ...user.user,
      nombre: nameRef.current.value,
      telefono: phoneRef.current.value,
      edad: ageRef.current.value,
    };
    console.log(values);
  };
  return (
    <section className="w-full h-full">
      <div className="w-full h-full mt-4 mb-5">
        <ProfileUser />
        <div className="dark:border-[0.1px] dark:border-black shadow-lg dark:shadow-none w-[85%] rounded-lg m-auto dark:bg-neutral-900">
          <div className="p-5 border-b-[1px] border-blue-50">
            <h1 className="dark:text-white font-bold">
              Editar datos del usuario
            </h1>
          </div>
          <div className="flex dark:text-white">
            <div className="w-full">
              <form className="w-full">
                <div className="p-5 my-2">
                  <div className="py-2 flex">
                    <div className="w-[40%] mt-2">
                      <label>Full Name</label>
                    </div>
                    <div className="w-[60%]">
                      <input
                        ref={nameRef}
                        type="text"
                        className="dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2rem] p-3 my-1 rounded-lg"
                        defaultValue={user.user.nombre}
                      />
                    </div>
                  </div>
                  <div className="py-2 flex">
                    <div className="w-[40%] mt-2">
                      <label>Celular</label>
                    </div>
                    <div className="w-[60%]">
                      <input
                        ref={phoneRef}
                        type="text"
                        className="dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2rem] p-3 my-1 rounded-lg"
                        defaultValue={user.user.telefono}
                      />
                    </div>
                  </div>
                  <div className="py-2 flex">
                    <div className="w-[40%] mt-2">
                      <label>Edad</label>
                    </div>
                    <div className="w-[60%]">
                      <input
                        ref={ageRef}
                        type="text"
                        className="dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2rem] p-3 my-1 rounded-lg"
                        defaultValue={user.user.edad}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5 border-t-[1px] text-right border-blue-50">
                  <button
                    className="w-40 h-10 rounded-md font-bold bg-[#009EF7] "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="dark:border-[0.1px] dark:border-black shadow-lg dark:shadow-none w-[85%] rounded-lg m-auto my-8 dark:bg-neutral-900">
          <div>
            <div className="p-5 border-b-[1px] border-blue-50">
              <h1 className="dark:text-white font-bold">
                Editar Inicio de sesion
              </h1>
            </div>
            <div className="dark:text-white m-2">
              <div className="containerEmail">
                <div className={open ? "hidden" : "flex p-5 "}>
                  <div className="w-1/2">
                    <h1 className="font-bold">Correo Electronico</h1>
                    <span className="text-gray-500">{user.user.correo}</span>
                  </div>
                  <div className="w-1/2 text-right">
                    <button
                      className="w-36 h-10 mx-2 rounded-md font-bold bg-none hover:text-[#009EF7] hover:bg-[#1b4358]"
                      onClick={() => setOpen(!open)}
                    >
                      Change Email
                    </button>
                  </div>
                </div>
                <div className={open ? "EditarEmail" : "hidden"}>
                  <form>
                    <div className="flex p-5">
                      <div className="w-1/2">
                        <label className="font-bold block">
                          Ingresa el nuevo correo electronico
                        </label>
                        <input
                          type="email"
                          className="w-5/6 dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2.4rem] p-3 my-1 rounded-lg mt-3"
                          placeholder="example@example.com"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="font-bold block">
                          Confirmar Contraseña
                        </label>
                        <input
                          type="password"
                          className="w-5/6 dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2.4rem] p-3 my-1 rounded-lg mt-3"
                          placeholder="**********"
                        />
                      </div>
                    </div>
                    <div className="px-5 mb-5">
                      <button
                        className="w-40 h-10 rounded-md font-bold bg-[#009EF7] "
                        type="submit"
                      >
                        Actualizar Email
                      </button>

                      <button
                        className="w-24 h-10 mx-2 rounded-md font-bold bg-none hover:text-[#009EF7] hover:bg-[#1b4358]"
                        type="button"
                        onClick={() => setOpen(!open)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="containerPassword">
                <div className={password ? "hidden" : "flex p-5 "}>
                  <div className="w-1/2">
                    <h1 className="font-bold">Password</h1>
                    <span className="text-gray-500">********</span>
                  </div>
                  <div className="w-1/2 text-right">
                    <button
                      className="w-36 h-10 mx-2 rounded-md font-bold bg-none hover:text-[#009EF7] hover:bg-[#1b4358]"
                      onClick={() => setPassword(!password)}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
                <div className={password ? "EditarPassword" : "hidden"}>
                  <form>
                    <div className="flex p-5">
                      <div className="w-1/2">
                        <label className="font-bold block">
                          Contraseña Actual
                        </label>
                        <input
                          type="password"
                          className="w-5/6 dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2.4rem] p-3 my-1 rounded-lg mt-3"
                          placeholder="********"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="font-bold block">
                          Confirmar Nueva Contraseña
                        </label>
                        <input
                          type="password"
                          className="w-5/6 dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2.4rem] p-3 my-1 rounded-lg mt-3"
                          placeholder="**********"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="font-bold block">
                          Contraseña Nueva
                        </label>
                        <input
                          type="password"
                          className="w-5/6 dark:text-gray-500 dark:bg-neutral-800 outline-none h-[2.4rem] p-3 my-1 rounded-lg mt-3"
                          placeholder="**********"
                        />
                      </div>
                    </div>
                    <div className="px-5 mb-5">
                      <button
                        className="w-40 h-10 rounded-md font-bold bg-[#009EF7] "
                        type="submit"
                      >
                        Update password
                      </button>

                      <button
                        className="w-24 h-10 mx-2 rounded-md font-bold bg-none hover:text-[#009EF7] hover:bg-[#1b4358]"
                        type="button"
                        onClick={() => setPassword(!password)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditUser;
