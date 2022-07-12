import { ISongRepository } from "../../../repositories/Song";
import { ICreateSongDTO } from "./CreateSongDTO";

export class CreateSongUseCase {
  constructor(private SongRepository: ISongRepository) {}

  async execute({ name, artist, gender, album }: ICreateSongDTO) {
    const song = await this.SongRepository.create({
      name,
      artist,
      gender,
      album,
    });

    return song;
  }
}
