const { getArtistById } = require("../controllers/artist");

const getById = async (req, res) => {
  try {
    const artistId = req.params.id;

    const data = await getArtistById(artistId);

    return res.status(200).json(data);
  } catch (err) {
    return res.status(err.response.status).json({ message: err.response.data });
  }
};

module.exports = { getById };
