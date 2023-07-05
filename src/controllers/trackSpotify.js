const { default: axios } = require("axios");
const { getConfig } = require("../utils/token");

const getTracksRecomendations = async (seedGenresString) => {
  const url = new URL("https://api.spotify.com/v1/recommendations");

  const config = await getConfig();

  url.searchParams.append("seed_genres", seedGenresString);

  const { data } = await axios.get(url.href, config);

  return data;
};

//*Check if genres exist
const comprobateGenreSeeds = async (seedGenresString) => {
  const config = await getConfig();

  seedGenres = seedGenresString.split(",");

  const {
    data: { genres },
  } = await axios.get(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds",
    config
  );

  const verificationGenres = seedGenres.every((seedGenre) =>
    genres.includes(seedGenre)
  );

  if (!verificationGenres) return null;

  return seedGenresString;
};

const getTrackById = async (trackId) => {
  const config = await getConfig();

  const { data } = await axios.get(
    `https://api.spotify.com/v1/tracks/${trackId}`,
    config
  );
  
  return data;
};

module.exports = {
  getTracksRecomendations,
  comprobateGenreSeeds,
  getTrackById
};
