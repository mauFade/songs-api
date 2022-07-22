import { PrismaAlbumRepository } from "../../../repositories/prisma/PrismaAlbumRepository";
import { DeleteAlbumController } from "./DeleteAlbumController";
import { DeleteAlbumUseCase } from "./DeleteAlbumUseCase";

const prismaRepository = new PrismaAlbumRepository();

const deleteAlbumUseCase = new DeleteAlbumUseCase(prismaRepository);

const deleteAlbumController = new DeleteAlbumController(deleteAlbumUseCase);

export { deleteAlbumUseCase, deleteAlbumController };
