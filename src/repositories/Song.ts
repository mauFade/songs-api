import { ICreateSongDTO } from "../usecases/Song/CreateSong/CreateSongDTO";
import { Song } from "@prisma/client";

export interface ISongRepository {
  create: (data: ICreateSongDTO) => Promise<Song>;
  read: () => Promise<Song[]>;
}
