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
    return res.status(500).json({ message: err });
  }
};

const getById = async (req, res) => {
  try {
    const trackId = req.params.id;

    const data = await getTrackById(trackId);
    
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getAllBySearch = async (req, res) => {
  try{
    const query = req.query

    // if(!query.q) return res.status(400).json({ message: "The search parameter q is required" });
    // console.log({limit: query.limit})

    // if(query.limit === "") return res.status(400).json({ message: "you need to add a number value in the limit parameter that is in the range 1-50" });

    // if(query.limit !== undefined){
    //   if(isNaN(Number(query.limit))) return res.status(400).json({ message: "Invalid value in limit parameter" });

    //   if(Number(query.limit) < 1 || Number(query.limit) > 50) return res.status(400).json({ message: "the value of the limit parameter is outside the range 1 - 50, enter a value within the range" });
    // }

    const data = await searchTrack(query)

    return res.status(200).json(data);

  }catch(err){
    return res.status(500).json({ message: err });
  }
}

module.exports = { getRecomendations, getById, getAllBySearch };
