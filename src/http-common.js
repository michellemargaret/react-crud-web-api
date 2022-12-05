import axios from "axios";

export default axios.create({
  baseURL: "http://mygrocerylist-env.eba-mqvynsm9.us-east-1.elasticbeanstalk.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
