import axios from "axios";

export const httpsClient = axios.create({
  baseURL: "https://back.legacy-ex.com/",
});