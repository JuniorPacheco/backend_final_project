const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Playlists = db.define("Playlist", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UserId: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});

module.exports = Playlists;