import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import IMG from "./11007485.jpg";

const Login = () => {
  const { AuthLogin } = useContext(AuthContext);
  return (
    <>
      <section className="bg-gray-50 dark:bg-neutral-900">
        <div className="flex flex-row md:h-screen lg:py-0">
          <div className="w-[39%]">
            <img src={IMG} className="w-full h-full" alt="" />
          </div>
          <div className="w-[61%] h-screen">
            <div className="shadow-xl w-[500px] h-auto mx-auto p-5 mt-[22%] dark:shadow-white dark:shadow-sm">
              <div className="text-center my-1">
                <h1 className="text-2xl font-bold mb-[2%] dark:text-white">
                  Iniciar Sesion
                </h1>
              </div>
              <div>
                <Formik
                  initialValues={{
                    correo: "",
                    contraseña: "",
                  }}
                  onSubmit={(values) => AuthLogin(values)}
                >
                  <Form className="p-5">
                    <div className="relative z-0 mb-8 w-full group">
                      <Field
                        type="email"
                        name="correo"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        autoComplete="off"
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative z-0 mb-8 w-full group">
                      <Field
                        type="password"
                        name="contraseña"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        autoComplete="off"
                        required
                      />
                      <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Password
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-400 hover:bg-blue-500 rounded-md h-10 font-bold text-white"
                      >
                        Enviar
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
