import { ISongRepository } from "../../../repositories/Song";
import { IUpdateSongDTO } from "./UpdateSongDTO";

export class UpdateSongUseCase {
  constructor(private songRepository: ISongRepository) {}

  async execute({ id, name, artist, gender, album }: IUpdateSongDTO) {
    if (!id) {
      throw new Error("Song id is required.");
    }

    const song = await this.songRepository.update({
      id,
      name,
      artist,
      gender,
      album,
    });

    return song;
  }
}
