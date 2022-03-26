import axios from "axios";

export default axios.create({
  baseURL: "http://44.203.195.96:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
