import { Request, Response } from "express";
import { CreateSongUseCase } from "./CreateSongUseCase";

export class CreateSongcontroller {
  constructor(private createSongUseCase: CreateSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, artist, gender, album }: { name: string; artist: string; gender: string; album: string } =
      request["body"];

    try {
      const song = await this.createSongUseCase.execute({
        name,
        artist,
        gender,
        album,
      });

      return response.status(201).send({ success: true, song });
    } catch (error) {
      return response.status(400).send({ message: error["message"] || "Unexpected error." });
    }
  }
}
