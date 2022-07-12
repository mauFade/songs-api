import { PrismaSongRepository } from "../../../repositories/prisma/PrismaSongRepository";
import { CreateSongcontroller } from "./CreateSongController";
import { CreateSongUseCase } from "./CreateSongUseCase";

const PrismaRepository = new PrismaSongRepository();

const createUseCase = new CreateSongUseCase(PrismaRepository);

const createSongController = new CreateSongcontroller(createUseCase);

export { createUseCase, createSongController };
