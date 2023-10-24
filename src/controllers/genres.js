const { default: axios } = require("axios");
const { getConfig } = require("../utils/token");

const getAllGenres = async () => {
  const config = await getConfig();

  const {data} = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", config)

  return data
};

module.exports = {
  getAllGenres,
};
