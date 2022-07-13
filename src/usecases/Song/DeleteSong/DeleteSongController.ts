import { Request, Response } from "express";
import { DeleteSongUseCase } from "./DeleteSongUseCase";

export class DeleteSongController {
  constructor(private deleteSongUseCase: DeleteSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id }: { id: string } = Object(request["query"]);

    const songId: number = parseInt(id);

    try {
      await this.deleteSongUseCase.execute({ id: songId });

      return response.status(200).send({ success: true, message: "Song deleted successfully." });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] || "Unexpected error." });
    }
  }
}
