import axios from "axios";

const API = axios.create({
  baseURL: "https://interview-front-api.herokuapp.com/", // The best practice is to use the baseURL by environment variables
});

API.defaults.headers.post["Content-Type"] = "application/json";

export default API;
