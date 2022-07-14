import { PrismaAlbumRepository } from "../../../repositories/prisma/PrismaAlbumRepository";
import { UpdateAlbumController } from "./UpdateAlbumController";
import { UpdateAlbumUseCase } from "./UpdateAlbumUseCase";

const prismaRepository = new PrismaAlbumRepository();

const updateUseCase = new UpdateAlbumUseCase(prismaRepository);

const updateAlbumController = new UpdateAlbumController(updateUseCase);

export { updateUseCase, updateAlbumController };
