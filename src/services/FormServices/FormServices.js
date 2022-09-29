import axios from "axios";
import { Header } from "../AuthorizationHeader/Header";

export const CreateForm = async (form) => {
  try {
    let payload = JSON.stringify({
      ...form,
      user_id: 2,
      data: [
        {
          cantidad: 1,
          unidad: "mesas",
          descripcion: "hola",
        },
      ],
    });
    console.log(payload);
    const API_URL = "http://localhost:3001/api/forms";
    await axios.post(API_URL, payload, Header);
  } catch (e) {
    console.log(e);
  }
};

export const ListAllForms = async () => {
  try {
    const API_URL = "http://localhost:3001/api/forms/";
    const res = await axios.get(API_URL, Header);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const FormDetail = async (num) => {
  try {
    const API_URL = `http://localhost:3001/api/forms/${num}`;
    const res = await axios.get(API_URL, Header);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const DeleteForm = async (num) => {
  try {
    const API_URL = `http://localhost:3001/api/forms/${num}`;
    const res = await axios.get(API_URL, Header);
    return res;
  } catch (e) {
    console.log(e);
  }
};
