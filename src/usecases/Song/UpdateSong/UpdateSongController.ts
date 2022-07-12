import { Request, Response } from "express";
import { UpdateSongUseCase } from "./UpdateSongUseCase";

export class UpdateSongController {
  constructor(private updateSongUseCase: UpdateSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id }: { id: string } = Object(request["query"]);

    const { name, artist, gender, album }: { name: string; artist: string; gender: string; album: string } =
      request["body"];

    try {
      const songId: number = parseInt(id);

      const song = await this.updateSongUseCase.execute({
        id: songId,
        name,
        artist,
        gender,
        album,
      });

      return response.status(200).send({ success: true, song });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] || "Unexpected error." });
    }
  }
}
