import axios from "axios";

const instance = axios.create({
  baseURL: "https://mezacaleria-esperanza.firebaseio.com/",
});

export default instance;
