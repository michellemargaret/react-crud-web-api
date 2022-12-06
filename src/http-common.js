import axios from "axios";

export default axios.create({
  baseURL: "https://mygrocerylistapi.ca/api",
  headers: {
    "Content-type": "application/json",
  },
});
