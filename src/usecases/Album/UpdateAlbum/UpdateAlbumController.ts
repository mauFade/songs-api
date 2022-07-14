import { Request, Response } from "express";
import { UpdateAlbumUseCase } from "./UpdateAlbumUseCase";

export class UpdateAlbumController {
  constructor(private updateUseCase: UpdateAlbumUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id }: { id: string } = Object(request["query"]);

    const { name, artist, year }: { name: string; artist: string; year: number } = request["body"];

    const albumId = parseInt(id);

    try {
      const album = await this.updateUseCase.update({
        id: albumId,
        name,
        artist,
        year,
      });

      return response.status(200).send({ success: true, album });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] || "Unexpected error." });
    }
  }
}
