import { ListSongController } from "./ListSongsController";
import { ListSongUseCase } from "./ListSongUseCase";
import { PrismaSongRepository } from "./../../../repositories/prisma/PrismaSongRepository";

const prismaRepository = new PrismaSongRepository();

const readUseCase = new ListSongUseCase(prismaRepository);

const readSongController = new ListSongController(readUseCase);

export { readUseCase, readSongController };
