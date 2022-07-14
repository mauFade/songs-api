import { Album } from "../../../entities/Album";
import { IAlbumRepository } from "../../../repositories/Album";
import { ICreateAlbumDTO } from "./CreateAlbumDTO";

export class CreateAlbumUseCase {
  constructor(private createAlbumRepository: IAlbumRepository) {}

  async execute({ name, artist, year }: ICreateAlbumDTO) {
    if (!name) {
      throw new Error("Name is required.");
    }

    if (!artist) {
      throw new Error("Artist is required.");
    }

    if (!year || year <= 0) {
      throw new Error("Year is required.");
    }

    const album = new Album({ name, artist, year });

    const data = await this.createAlbumRepository.create(album);

    return data;
  }
}
