const { getConfig } = require("../utils/token");
const { axiosSpotify } = require("../utils/configAxios");

const getAllGenres = async () => {
  const config = await getConfig();

  const { data } = await axiosSpotify.get(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds",
    config
  );

  return data;
};

module.exports = {
  getAllGenres,
};
