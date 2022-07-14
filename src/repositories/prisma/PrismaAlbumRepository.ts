import { prisma } from "../../services/prisma";

import { IDeleteAlbumDTO } from "./../../usecases/Album/DeleteAlbum/DeleteAlbumDTO";
import { ICreateAlbumDTO } from "../../usecases/Album/CreateAlbum/CreateAlbumDTO";
import { IUpdateAlbumDTO } from "../../usecases/Album/UpdateAlbum/UpdateAlbumDTO";
import { IAlbumRepository } from "../Album";

export class PrismaAlbumRepository implements IAlbumRepository {
  async create({ name, artist, year }: ICreateAlbumDTO) {
    const album = await prisma.album.create({
      data: {
        name,
        artist,
        year,
      },
    });

    return album;
  }

  async read() {
    const albums = await prisma.album.findMany();

    return albums;
  }

  async update({ id, name, artist, year }: IUpdateAlbumDTO) {
    const album = await prisma.album.update({
      where: {
        id,
      },
      data: {
        name,
        artist,
        year,
      },
    });

    return album;
  }

  async delete({ id }: IDeleteAlbumDTO) {
    await prisma.album.delete({ where: { id } });
  }
}
