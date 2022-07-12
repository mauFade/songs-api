import { Song } from "./../../../entities/Song";
import { ISongRepository } from "../../../repositories/Song";
import { ICreateSongDTO } from "./CreateSongDTO";

export class CreateSongUseCase {
  constructor(private SongRepository: ISongRepository) {}

  async execute({ name, artist, gender, album }: ICreateSongDTO) {
    if (!name) {
      throw new Error("Name is required.");
    }

    if (!artist) {
      throw new Error("Artist is required.");
    }

    if (!gender) {
      throw new Error("Gender is required.");
    }

    const song = new Song({ name, artist, gender, album });

    const data = await this.SongRepository.create(song);

    return data;
  }
}
