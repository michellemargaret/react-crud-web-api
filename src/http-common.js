import axios from "axios";

export default axios.create({
  baseURL: "https://cors-everywhere.herokuapp.com/http://34.207.192.37:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
