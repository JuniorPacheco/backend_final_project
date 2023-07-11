const uuid = require("uuid");
const Playlists = require("../models/playlist");
const { getTracksByPlaylist, createTracks } = require("./track");

const getPlaylistById = async (playlistId) => {
  const playlist = await Playlists.findOne({
    where: {
      id: playlistId,
    },
  });

  if (!playlist) return null;

  const tracks = await getTracksByPlaylist(playlistId);
  console.log({tracks})
  const responsePlaylist = {
    id: playlist.id,
    title: playlist.title,
    message: playlist.message,
    from: playlist.from,
    to: playlist.to,
    tracks: tracks.tracks,
    UserId: playlist.UserId,
  };

  return responsePlaylist;
};

const getAllPlaylistsByUser = async (userId) => {
  const playlists = await Playlists.findAll({
    where: {
      UserId: userId,
    },
  });

  const playlistsComplete = await Promise.all(
    playlists.map(async (playlist) => {
      const playlistComplete = await getPlaylistById(playlist.id);
      return playlistComplete;
    })
  );

  return playlistsComplete;
};

const createPlaylist = async (UserId, playlistInfo) => {
  const newPlaylist = await Playlists.create({
    id: uuid.v4(),
    UserId,
    ...playlistInfo,
  });

  const tracks = await createTracks(playlistInfo.tracks, newPlaylist.id)
  
  const response = {
    id: newPlaylist.id,
    title: newPlaylist.title,
    message: newPlaylist.message,
    from: newPlaylist.from,
    to: newPlaylist.to,
    tracks,
  }

  return response;
};

const deletePlaylist = async (playlistId) => {
  const response = await Playlists.destroy({
    where: {
      id: playlistId,
    },
  });

  return response;
};

const editPlaylist = async (playlistId, data) => {
  const response = await Playlists.update(data, { where: { id: playlistId } });

  return response;
};

module.exports = {
  getPlaylistById,
  createPlaylist,
  getAllPlaylistsByUser,
  deletePlaylist,
  editPlaylist
};
