import { Formik, Form } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/usercontext/UserContext";
import TextInput from "../../utils/TextInput";
import IMG from "./linux.jpg";

const validate = (values) => {
  const errors = {};
  let isValidEmail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!values.correo) {
    errors.correo = "El Correo es requerido";
  } else if (!isValidEmail.test(values.correo)) {
    errors.correo = "Agregue un correo valido";
  }
  if (!values.contraseña) {
    errors.contraseña = "La Contraseña es requerido";
  } else if (values.contraseña.length < 4) {
    errors.contraseña = "Contraseña demasiado corta";
  }
  return errors;
};

const Login = () => {
  const { AuthLogin } = useContext(AuthContext);
  return (
    <>
      <section className="w-full bg-gray-50 dark:bg-neutral-900">
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
                validate={validate}
                onSubmit={(values) => AuthLogin(values)}
              >
                <Form>
                  <div className="relative z-0 mb-8 w-full group">
                    <TextInput type="email" label="Correo" name="correo" />
                  </div>
                  <div className="relative z-0 mb-8 w-full group">
                    <TextInput
                      type="password"
                      label="Contraseña"
                      name="contraseña"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{ width: "100%" }}
                    >
                      Iniciar
                    </button>
                    {/* {error ? (
                      <h1 className="text-red-500 mt-4 text-center">{error}</h1>
                    ) : null} */}
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
