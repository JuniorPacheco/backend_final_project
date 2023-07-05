const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Tracks = db.define("Track", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  spotifyId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Tracks;