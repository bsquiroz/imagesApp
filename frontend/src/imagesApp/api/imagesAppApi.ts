import axios from "axios";

const BASE_URL_BACKEND = "https://imagesapp-production.up.railway.app/api/v1";
// const BASE_URL_BACKEND = "http://localhost:3002/api/v1";

const imagesAppApi = axios.create({
  baseURL: BASE_URL_BACKEND,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

export { imagesAppApi };
