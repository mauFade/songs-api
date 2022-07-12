import { Song } from "@prisma/client";
import { prisma } from "../../services/prisma";
import { ICreateSongDTO } from "../../usecases/Song/CreateSong/CreateSongDTO";
import { ISongRepository } from "../Song";

export class PrismaSongRepository implements ISongRepository {
  async create({ name, artist, gender, album }: ICreateSongDTO) {
    const song = await prisma.song.create({
      data: {
        name,
        artist,
        album,
        gender,
      },
    });

    return song;
  }

  async read() {
    const songs = await prisma.song.findMany();

    return songs;
  }
}
