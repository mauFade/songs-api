import { PrismaAlbumRepository } from "../../../repositories/prisma/PrismaAlbumRepository";
import { ListAlbumsController } from "./ListAlbumsController";
import { ListAlbumsUseCase } from "./ListAlbumsUseCase";

const prismaRepository = new PrismaAlbumRepository();

const readUseCase = new ListAlbumsUseCase(prismaRepository);

const readAlbumController = new ListAlbumsController(readUseCase);

export { readUseCase, readAlbumController };
