const { getArtistById } = require("../controllers/artist");

const getById = async (req, res) => {
  try {
    const artistId = req.params.id;

    const data = await getArtistById(artistId);

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = { getById };
