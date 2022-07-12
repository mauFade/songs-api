import { PrismaSongRepository } from "../../../repositories/prisma/PrismaSongRepository";
import { UpdateSongController } from "./UpdateSongController";
import { UpdateSongUseCase } from "./UpdateSongUseCase";

const prismaRepository = new PrismaSongRepository();

const updateUseCase = new UpdateSongUseCase(prismaRepository);

const updateSongController = new UpdateSongController(updateUseCase);

export { updateUseCase, updateSongController };
