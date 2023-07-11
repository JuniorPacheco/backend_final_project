const { default: axios } = require("axios");
const { getConfig } = require("../utils/token");

const getArtistById = async (artistId) => {
  const config = await getConfig();

  const { data: dataArtist } = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}`,
    config
  );

  const { data: songsTop } = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`,
    config
  );

  const { data: albums } = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    config
  );

  dataArtist.songsTop = songsTop.tracks
  dataArtist.albums = albums.items

  return dataArtist;
};

module.exports = { getArtistById };
