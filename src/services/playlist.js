const {
  getPlaylistById,
  getAllPlaylistsByUser,
  deletePlaylist,
  createPlaylist,
  editPlaylist,
} = require("../controllers/playlist");

const getById = async (req, res) => {
  try {
    const playlistId = req.params.id;

    const result = await getPlaylistById(playlistId);

    if (!result) return res.status(404).json({ message: "Not found" });

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getAllByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const playlists = await getAllPlaylistsByUser(userId);
    return res.status(200).json(playlists);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const deleteById = async (req, res) => {
  try {
    const playlistId = req.params.id;
    const userId = req.user.id;
    const playlist = await getPlaylistById(playlistId);

    if (!playlist) return res.status(404).json({ message: "Not found" });

    if (playlist.UserId !== userId)
      return res
        .status(403)
        .json({ message: "you don't have permissions for this action" });

    const response = await deletePlaylist(playlistId);

    return res.status(204).json(response);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const create = async (req, res) => {
  try {
    const body = req.body;
    const userId = req.user.id;

    const response = await createPlaylist(userId, body);

    return res
      .status(200)
      .json({ message: `playlist: ${response.title}, created successfully`, info: response });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const edit = async (req, res) => {
  try {
    const body = req.body;
    const userId = req.user.id;
    const playlistId = req.params.id;

    const playlist = await getPlaylistById(playlistId);

    if (!playlist) return res.status(404).json({ message: "Not found" });

    if (playlist.UserId !== userId)
      return res
        .status(403)
        .json({ message: "you don't have permissions for this action" });

    await editPlaylist(playlistId, body);

    return res.status(200).json({ message: `playlist updated successfully` });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = { getById, getAllByUser, deleteById, create, edit };
