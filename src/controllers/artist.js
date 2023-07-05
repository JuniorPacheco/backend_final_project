const { default: axios } = require("axios");
const { getConfig } = require("../utils/token");

const getArtistById = async (artistId) => {
  const config = await getConfig();

  const { data } = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}`,
    config
  );

  return data;
};

module.exports = { getArtistById };
