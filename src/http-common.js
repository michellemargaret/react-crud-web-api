import axios from "axios";

export default axios.create({
  baseURL: "http://grocerylistapi.ca/api",
  headers: {
    "Content-type": "application/json",
  },
});
