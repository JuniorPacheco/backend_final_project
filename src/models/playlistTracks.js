const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Tracks = require("./tracks");
const Playlists = require("./playlist");

const PlaylistTracks = db.define("PlaylistTrack", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  TrackId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Tracks,
      key: "id"
    }
  },
  PlaylistId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Playlists,
      key: "id"
    }
  },
});

module.exports = PlaylistTracks;