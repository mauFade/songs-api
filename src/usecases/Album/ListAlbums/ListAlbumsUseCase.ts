import { IAlbumRepository } from "../../../repositories/Album";

export class ListAlbumsUseCase {
  constructor(private albumRepository: IAlbumRepository) {}

  async execute() {
    const albums = await this.albumRepository.read();

    return albums;
  }
}
