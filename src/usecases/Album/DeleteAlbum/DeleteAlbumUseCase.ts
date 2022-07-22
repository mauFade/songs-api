import { IAlbumRepository } from "../../../repositories/Album";
import { IDeleteAlbumDTO } from "./DeleteAlbumDTO";

export class DeleteAlbumUseCase {
  constructor(private deleteAlbumRepository: IAlbumRepository) {}

  async execute({ id }: IDeleteAlbumDTO) {
    if (!id || id <= 0) {
      throw new Error("Id is required.");
    }

    await this.deleteAlbumRepository.delete({ id });
  }
}
