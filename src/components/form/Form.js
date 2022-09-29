import { Formik, Form } from "formik";
import Img from "./officeWallpaper.jpg";
import validate from "../../utils/Validation";
import TextInput from "../../utils/TextInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateForm } from "../../services/FormServices/FormServices";

const Forms = () => {
  const notify = () =>
    toast.success("🦄 Solicitud Enviada!", {
      position: "top-right",
      autoClose: 5000,
      color: "white",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <>
      <div className="w-full text-center">
        <h1 className="my-8 font-bold text-xl dark:text-white">
          Formulario de Requisiciones
        </h1>
      </div>
      <div className="w-full h-[32rem] p-5 flex justify-center">
        <div className="w-1/5 h-auto">
          <img src={Img} className="w-full h-full" alt="" />
        </div>
        <div className="w-4/6 mx-10">
          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              celular: "",
              extension: "",
              correo: "",
              departamento: "",
              puesto: "",
            }}
            validate={validate}
            onSubmit={(values) => CreateForm(values)}
          >
            <Form className="w-full">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-3 w-full group">
                  <TextInput name="nombre" label="Nombre" />
                </div>
                <div className="mb-3 w-full group">
                  <TextInput name="apellido" label="Apellido" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-3 w-full group">
                  <TextInput name="celular" label="Celular (272-456-7890)" />
                </div>
                <div className="mb-3 w-full group">
                  <TextInput name="extension" label="Extension" />
                </div>
              </div>
              <div className="mb-6 w-full group">
                <TextInput name="correo" label="Correo Electronico" />
              </div>
              <div className="mb-6 w-full group">
                <TextInput name="departamento" label="Departamento" />
              </div>
              <div className="mb-6 w-full group">
                <TextInput name="puesto" label="Puesto" />
              </div>

              <button
                type="submit"
                onClick={notify}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enviar
              </button>
              <ToastContainer
                position="top-right"
                toastStyle={{ backgroundColor: "#07BC0C", color: "white" }}
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Forms;
