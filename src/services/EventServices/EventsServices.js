import axios from "axios";
import { Header } from "../AuthorizationHeader/Header";

export const CreateEvent = async (event) => {
  try {
    const { title, description, allDay, start, end, color } = event;
    let payload = JSON.stringify({
      title,
      description,
      allDay,
      start,
      end,
      color,
    });
    const API_URL = "http://localhost:3001/api/events";
    await axios.post(API_URL, payload, Header);
  } catch (e) {
    console.log(e);
  }
};

export const ListAllEvents = async () => {
  try {
    const API_URL = "http://localhost:3001/api/events/";
    const res = await axios.get(API_URL, Header);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const EditEvent = async (updateEvent) => {
  try {
    const { id, title, description, allDay, start, end, color } = updateEvent;
    let payload = JSON.stringify({
      title,
      description,
      allDay,
      start,
      end,
      color,
    });
    const API_URL = `http://localhost:3001/api/events/${id}`;
    await axios.put(API_URL, payload, Header);
  } catch (e) {
    console.log(e);
  }
};

export const DeleteEvent = async (id) => {
  try {
    const API_URL = `http://localhost:3001/api/events/${id}`;
    await axios.delete(API_URL, Header);
  } catch (e) {
    console.log(e);
  }
};
