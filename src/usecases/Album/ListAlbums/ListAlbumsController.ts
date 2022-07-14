import { Request, Response } from "express";
import { ListAlbumsUseCase } from "./ListAlbumsUseCase";

export class ListAlbumsController {
  constructor(private listUseCase: ListAlbumsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const albums = await this.listUseCase.execute();

    return response.status(200).send({ success: true, albums });
  }
}
