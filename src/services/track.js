const { searchTrack } = require("../controllers/track");
const {
  getTracksRecomendations,
  comprobateGenreSeeds,
  getTrackById,
} = require("../controllers/trackSpotify");

const getRecomendations = async (req, res) => {
  try {
    const seed_genres = req.query.seed_genres;

    if (!seed_genres)
      return res.status(401).json({ message: "Need query param seed_genres" });

    const resultVerificationSeed = await comprobateGenreSeeds(seed_genres);
    if (!resultVerificationSeed)
      return res.status(400).json({
        message:
          "Someone genre seed is not valid, please review the information",
      });

    const result = await getTracksRecomendations(seed_genres);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.response.status).json({ message: err.response.data });
  }
};

const getById = async (req, res) => {
  try {
    const trackId = req.params.id;

    const data = await getTrackById(trackId);

    return res.status(200).json(data);
  } catch (err) {
    return res.status(err.response.status).json({ message: err.response.data });
  }
};

const getAllBySearch = async (req, res) => {
  try {
    const query = req.query;

    const data = await searchTrack(query);

    return res.status(200).json(data);
  } catch (err) {
    return res.status(err.response.status).json({ message: err.response.data });
  }
};

module.exports = { getRecomendations, getById, getAllBySearch };
