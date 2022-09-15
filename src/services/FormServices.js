import axios from "axios";

export const CreateForm = async (form) => {
  try {
    const { name, lastName, phone, extension, email, department, job } = form;
    let payload = JSON.stringify({
      nombre: name,
      apellido: lastName,
      celular: phone,
      extension: extension,
      correo: email,
      departamento: department,
      puesto: job,
    });
    const API_URL = "http://localhost:3001/api/forms";
    const res = await axios.post(API_URL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      console.log("Formulario enviado correctamente");
    }
  } catch (e) {
    console.log(e);
  }
};

export const ListAllForms = async (header) => {
  try {
    const API_URL = "http://localhost:3001/api/forms/";
    const res = await axios.get(API_URL, header);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const FormDetail = async (num) => {
  try {
    const API_URL = `http://localhost:3001/api/forms/${num}`;
    const res = await axios.get(API_URL);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const DeleteForm = async (num) => {
  try {
    const API_URL = `http://localhost:3001/api/forms/${num}`;
    const res = await axios.get(API_URL);
    return res;
  } catch (e) {
    console.log(e);
  }
};
