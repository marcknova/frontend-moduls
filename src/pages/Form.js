import { Formik, Form } from "formik";
import Img from "./officeWallpaper.jpg";
import validate from "../hooks/Validation";
import TextInput from "../hooks/TextInput";

const Forms = () => {
  return (
    <>
      <div className="w-full text-center">
        <h1 className="my-8 font-bold text-xl">Formulario de Requisiciones</h1>
      </div>
      <div className="w-full h-[32rem] p-5 flex justify-center">
        <div className="w-1/5 h-auto">
          <img src={Img} className="w-full h-full" alt="" />
        </div>
        <div className="w-4/6 mx-10">
          <Formik
            initialValues={{
              email: "",
              phone: "",
              department: "",
              name: "",
              lastName: "",
              job: "",
              extension: "",
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}
          >
            {(formik) => (
              <Form className="w-full" onSubmit={formik.handleSubmit}>
                <div className="relative z-0 mb-6 w-full group">
                  <TextInput name="email" label="Correo Electronico" />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <TextInput name="job" label="puesto" />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <TextInput name="department" label="Departamento" />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <TextInput name="name" label="Nombre" />
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <TextInput name="lastName" label="Apellido" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <TextInput name="phone" label="Celular (272-456-7890)" />
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <TextInput name="extension" label="Extension" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Forms;
