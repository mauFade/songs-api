import { ISongRepository } from "../../../repositories/Song";

export class ListSongUseCase {
  constructor(private ListSongRepository: ISongRepository) {}

  async read() {
    const songs = await this.ListSongRepository.read();

    return songs;
  }
}
