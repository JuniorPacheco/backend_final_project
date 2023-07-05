const PlaylistTracks = require("./playlistTracks");
const Playlists = require("./playlist");
const Tracks = require("./tracks");
const Users = require("./users");

const initModels = () => {
  //Relación uno a muchos
  Users.hasMany(Playlists);
  Playlists.belongsTo(Users);

  //Relación muchos a muchos
  Playlists.belongsToMany(Tracks, { through: PlaylistTracks, onDelete: "cascade" });
  Tracks.belongsToMany(Playlists, { through: PlaylistTracks, onDelete: "cascade" });
};

module.exports = initModels;
