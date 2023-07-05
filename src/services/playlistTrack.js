const { getPlaylistById } = require("../controllers/playlist");
const { deleteTrackPlaylistByPlaylist } = require("../controllers/playlistTrack");


const deleteById = async (req, res) => {
  const userId = req.user.id;
  const playlistId = req.params.playlistId;
  const trackId = req.params.trackId;

  const playlist = await getPlaylistById(playlistId)
  
  if(playlist.UserId !== userId) return res.status(403).json({ message: "You do not have permissions to perform this action" });

  const response = await deleteTrackPlaylistByPlaylist(playlistId, trackId)

  if(!response) return res.status(404).json({ message: "Not found track on this playlist" });

  return res.status(204).json({ message: "all ok" });
}

module.exports = {
  deleteById
}