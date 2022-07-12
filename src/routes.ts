import { Router } from "express";
import { createSongController } from "./usecases/Song/CreateSong";
import { readSongController } from "./usecases/Song/ListSongs";

const router = Router();

router.post("/song", (request, response) => {
  return createSongController.handle(request, response);
});

router.get("/song", (request, response) => {
  return readSongController.handle(request, response);
});

export { router };
