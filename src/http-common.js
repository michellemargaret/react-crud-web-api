import axios from "axios";

export default axios.create({
  baseURL: "https://cors-everywhere.herokuapp.com/http://grocerylistapi.ca/api",
  headers: {
    "Content-type": "application/json"
  }
});
