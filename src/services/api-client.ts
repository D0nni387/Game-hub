import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b12ef5164f27416f9450cf921b56e844",
  },
});
