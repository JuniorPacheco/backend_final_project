const express = require("express");
const { getById, getAllByUser, deleteById: deletePlaylistById, create, edit } = require("../services/playlist");
const passport = require("passport");
const { deleteById } = require("../services/playlistTrack");
const { validatorCreatePlaylist, validatorGetPlaylistById, validatorDeletePlaylistById, validatorEditPlaylistById } = require("../validators/playlist");
require("../middleware/auth")(passport);

const router = express.Router();

router.post("/", passport.authenticate("jwt", { session: false }), validatorCreatePlaylist, create);

router.get("/me", passport.authenticate("jwt", { session: false }), getAllByUser);

router.get("/:id", validatorGetPlaylistById, getById);

router.patch("/:id", passport.authenticate("jwt", { session: false }), validatorEditPlaylistById, edit);

router.delete("/:id", passport.authenticate("jwt", { session: false }), validatorDeletePlaylistById, deletePlaylistById);

router.delete("/:playlistId/tracks/:trackId", passport.authenticate("jwt", { session: false }), deleteById)

module.exports = router;
