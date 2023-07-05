const { getAllGenres } = require("../controllers/genres");

const getAll = async (req, res) => {
  try {
    const genres = await getAllGenres();

    return res.status(200).json(genres);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = {
  getAll,
};
