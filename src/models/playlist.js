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
  from: {
    type: DataTypes.STRING,
    allowNull: true,
    //Falta decir que cuando no venga el nombre entonces que se agregue el nombre del usuario que hizo la petición.
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