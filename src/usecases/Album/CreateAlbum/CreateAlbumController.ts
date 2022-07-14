import { Request, Response } from "express";
import { CreateAlbumUseCase } from "./CreateAlbumUseCase";

export class CreateAlbumController {
  constructor(private createAlbumUseCase: CreateAlbumUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, artist, year }: { name: string; artist: string; year: number } = request["body"];

    try {
      const album = await this.createAlbumUseCase.execute({ name, artist, year });

      return response.status(201).send({ success: true, album });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] || "Unexpected error." });
    }
  }
}
