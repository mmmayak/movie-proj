import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.interceptors.request.use(
  config => {
    config.params = {
      api_key: "ebea8cfca72fdff8d2624ad7bbf78e4c"
    };
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
