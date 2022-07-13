import { PrismaSongRepository } from "../../../repositories/prisma/PrismaSongRepository";
import { DeleteSongController } from "./DeleteSongController";
import { DeleteSongUseCase } from "./DeleteSongUseCase";

const prismaRepository = new PrismaSongRepository();

const deleteUseCase = new DeleteSongUseCase(prismaRepository);

const deleteSongController = new DeleteSongController(deleteUseCase);

export { deleteUseCase, deleteSongController };
