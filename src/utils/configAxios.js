const { default: axios } = require("axios");

const axiosSpotify = axios.create();

axiosSpotify.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 429) {
      err.response.data = `Please wait ${err.response.headers["retry-after"]} seconds to make another request`;
    }
    return Promise.reject(err);
  }
);

module.exports = {
  axiosSpotify,
};
