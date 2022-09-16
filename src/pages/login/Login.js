import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import IMG from "./11007485.jpg";
const Login = () => {
  const { AuthLogin } = useContext(AuthContext);
  return (
    <>
      <section className="bg-gray-50 dark:bg-neutral-900">
        <div className="flex flex-row ">
          <div className="w-[42%] h-screen bg-black">
            <img src={IMG} className="w-full h-full" alt="" />
          </div>
          <div className="w-58% h-full m-auto">
            <div className="w-[28rem] shadow-sm shadow-blue-600 p-8 rounded-lg">
              <div className="my-5">
                <h1 className="font-bold text-xl dark:text-white text-black text-center">
                  Iniciar Sesion
                </h1>
              </div>
              <Formik
                initialValues={{
                  correo: "",
                  contraseña: "",
                }}
                onSubmit={(values) => AuthLogin(values)}
              >
                <Form>
                  <div className="relative z-0 mb-8 w-full group">
                    <Field
                      type="email"
                      name="correo"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      autoComplete="off"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Correo
                    </label>
                  </div>
                  <div className="relative z-0 mb-8 w-full group">
                    <Field
                      type="password"
                      name="contraseña"
                      id="floating_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      autoComplete="off"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contraseña
                    </label>
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{ width: "100%" }}
                    >
                      Iniciar
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
