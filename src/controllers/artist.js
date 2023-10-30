const { getConfig } = require("../utils/token");
const { axiosSpotify } = require("../utils/configAxios");

const getArtistById = async (artistId) => {
  const config = await getConfig();

  const { data: dataArtist } = await axiosSpotify.get(
    `https://api.spotify.com/v1/artists/${artistId}`,
    config
  );

  const { data: songsTop } = await axiosSpotify.get(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`,
    config
  );

  const { data: albums } = await axiosSpotify.get(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    config
  );

  dataArtist.songsTop = songsTop.tracks;
  dataArtist.albums = albums.items;

  return dataArtist;
};

module.exports = { getArtistById };
