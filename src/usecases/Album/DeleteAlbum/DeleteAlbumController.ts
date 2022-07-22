import { Request, Response } from "express";
import { DeleteAlbumUseCase } from "./DeleteAlbumUseCase";

export class DeleteAlbumController {
  constructor(private deleteAlbumUseCase: DeleteAlbumUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id }: { id: string } = Object(request["query"]);

    const albumID: number = parseInt(id);

    try {
      await this.deleteAlbumUseCase.execute({ id: albumID });

      return response.status(200).send({ success: true, message: "Album deleted successfully." });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] });
    }
  }
}
