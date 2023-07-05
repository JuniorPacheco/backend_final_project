const { default: axios } = require("axios");
require("dotenv").config();

const getConfig = async () => {
  // console.log({data: process.env.CLIENT_ID})
  const {
    data: { access_token },
  } = await axios.post(
    "https://accounts.spotify.com/api/token",
    `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  );
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  return config;
};

module.exports = { getConfig };
