import { ICreateSongDTO } from "../usecases/Song/CreateSong/CreateSongDTO";
import { IUpdateSongDTO } from "../usecases/Song/UpdateSong/UpdateSongDTO";
import { Song } from "@prisma/client";

export interface ISongRepository {
  create: (data: ICreateSongDTO) => Promise<Song>;
  read: () => Promise<Song[]>;
  update: (data: IUpdateSongDTO) => Promise<Song>;
}
