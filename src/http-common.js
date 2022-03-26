import axios from "axios";

export default axios.create({
  baseURL: "https://cors-everywhere.herokuapp.com/http://44.203.195.96:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
