const PlaylistTracks = require("../models/playlistTracks");
const Playlists = require("../models/playlist");
const Tracks = require("../models/tracks");
const Users = require("../models/users");

const generateData = async () => {
  await Users.create({
    id: "3911e153-2d4a-4338-a4d6-a17fd38fea99",
    name: "Junior Pacheco",
    email: "junior@academlo.com",
    password: "$2b$10$tfubQx/DtcLFDM.pk9emuuoOtIgAskdXnAZHSr1SC.1/qb1SXklji",
  });

  await Users.create({
    id: "4093ab84-6ae6-4e20-809c-ecdec8e06267",
    name: "Fabian Moyano",
    email: "fabian@academlo.com",
    password: "$2b$10$tfubQx/DtcLFDM.pk9emuuoOtIgAskdXnAZHSr1SC.1/qb1SXklji",
  });

  await Playlists.create({
    UserId: "3911e153-2d4a-4338-a4d6-a17fd38fea99",
    id: "d15c4cb3-ed33-4028-8721-7df56b0695cd",
    title: "Hola",
    message: "Adios",
    from: "Junior",
    to: "Carolina",
  });

  await Playlists.create({
    UserId: "3911e153-2d4a-4338-a4d6-a17fd38fea99",
    id: "b2b5c7cc-2137-46d7-9376-d2895c8d8758",
    title: "Hola2",
    message: "Adios2",
    from: "Junio2",
    to: "Carolina2",
  });

  await Playlists.create({
    UserId: "4093ab84-6ae6-4e20-809c-ecdec8e06267",
    id: "01e0d550-70e9-496f-9342-85fb7612e33a",
    title: "Hola3",
    message: "Adios3",
    from: "Junio3",
    to: "Carolina3",
  });

  await Tracks.create({
    id: "6095b161-0d10-4a77-93da-c776f099fb7b",
    spotifyId: "2FDFz5TuYlpP180AUicAcl",
  });

  await Tracks.create({
    id: "518829e7-df63-4cb3-90e5-fa1b4bd7604b",
    spotifyId: "6j5LtifAnuTjTYvml61yFZ",
  });

  await PlaylistTracks.create({
    id: "f7a384da-7765-4d8b-8353-1d000eb46356",
    TrackId: "6095b161-0d10-4a77-93da-c776f099fb7b",
    PlaylistId: "b2b5c7cc-2137-46d7-9376-d2895c8d8758"
  })

  await PlaylistTracks.create({
    id: "b74b2c05-99f4-4858-be8f-4e53adb7464a",
    TrackId: "518829e7-df63-4cb3-90e5-fa1b4bd7604b",
    PlaylistId: "b2b5c7cc-2137-46d7-9376-d2895c8d8758"
  })
};

module.exports = generateData;
