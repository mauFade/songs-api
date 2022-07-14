import { PrismaAlbumRepository } from "../../../repositories/prisma/PrismaAlbumRepository";
import { CreateAlbumController } from "./CreateAlbumController";
import { CreateAlbumUseCase } from "./CreateAlbumUseCase";

const prismaRepository = new PrismaAlbumRepository();

const createUseCase = new CreateAlbumUseCase(prismaRepository);

const createAlbumController = new CreateAlbumController(createUseCase);

export { createUseCase, createAlbumController };
