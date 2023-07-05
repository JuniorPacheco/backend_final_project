const PlaylistTracks = require("../models/playlistTracks");

const deleteTrackPlaylistByPlaylist = async (PlaylistId, TrackId) => {
  const data = await PlaylistTracks.destroy({
    where: {
      PlaylistId,
      TrackId
    },
  });

  return data;
};

module.exports = {
  deleteTrackPlaylistByPlaylist
};
