import axios from "axios";

const imagesAppApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

console.log(import.meta.env.VITE_BACKEND_URL);

export { imagesAppApi };
