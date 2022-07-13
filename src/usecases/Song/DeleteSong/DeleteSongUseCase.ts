import { ISongRepository } from "./../../../repositories/Song";
import { IDeleteSongDTO } from "./DeleteSongDTO";

export class DeleteSongUseCase {
  constructor(private SongRepository: ISongRepository) {}

  async execute({ id }: IDeleteSongDTO) {
    if (!id || id === 0) {
      throw new Error("You must send a valid id.");
    }

    await this.SongRepository.delete({ id });
  }
}
