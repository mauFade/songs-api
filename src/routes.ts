import { Router } from "express";
import { createAlbumController } from "./usecases/Album/CreateAlbum";

import { createSongController } from "./usecases/Song/CreateSong";
import { deleteSongController } from "./usecases/Song/DeleteSong";
import { readSongController } from "./usecases/Song/ListSongs";
import { updateSongController } from "./usecases/Song/UpdateSong";

const router = Router();

// Rotas de músicas
router.post("/song", (request, response) => {
  return createSongController.handle(request, response);
});

router.get("/song", (request, response) => {
  return readSongController.handle(request, response);
});

router.put("/song", (request, response) => {
  return updateSongController.handle(request, response);
});

router.delete("/song", (request, response) => {
  return deleteSongController.handle(request, response);
});

// Rotas de albums
router.post("/album", (request, response) => {
  return createAlbumController.handle(request, response);
});

export { router };
