import { Album } from "@prisma/client";
import { ICreateAlbumDTO } from "../usecases/Album/CreateAlbum/CreateAlbumDTO";
import { IDeleteAlbumDTO } from "../usecases/Album/DeleteAlbum/DeleteAlbumDTO";
import { IUpdateAlbumDTO } from "../usecases/Album/UpdateAlbum/UpdateAlbumDTO";

export interface IAlbumRepository {
  create: (data: ICreateAlbumDTO) => Promise<Album>;
  read: () => Promise<Album[]>;
  update: (data: IUpdateAlbumDTO) => Promise<Album>;
  delete: (data: IDeleteAlbumDTO) => Promise<void>;
}
