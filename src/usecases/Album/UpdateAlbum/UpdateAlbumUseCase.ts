import { IAlbumRepository } from "../../../repositories/Album";
import { IUpdateAlbumDTO } from "./UpdateAlbumDTO";

export class UpdateAlbumUseCase {
  constructor(private updateAlbumRepository: IAlbumRepository) {}

  async update({ id, name, artist, year }: IUpdateAlbumDTO) {
    if (!id || id <= 0) {
      throw new Error("Id is required.");
    }

    const album = await this.updateAlbumRepository.update({
      id,
      name,
      artist,
      year,
    });

    return album;
  }
}
