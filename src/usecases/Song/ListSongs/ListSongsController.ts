import { Song } from "@prisma/client";
import { Request, Response } from "express";
import { ListSongUseCase } from "./ListSongUseCase";

export class ListSongController {
  constructor(private listSongUseCase: ListSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const songs = await this.listSongUseCase.read();

      return response.status(200).send({ success: true, songs });
    } catch (error) {
      return response.status(400).send({ message: error["message"] || "Unexpected error." });
    }
  }
}
