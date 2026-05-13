import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.5:5000/api", // your backend IP
});

// GET request
export const getMessage = () => API.get("/message");

// POST request
export const loginUser = (data) => API.post("/login", data);