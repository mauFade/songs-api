export class Song {
  public readonly id?: number;

  public name: string;
  public artist: string;
  public album?: string;
  public gender: string;

  constructor(props: Omit<Song, "id">, id?: number) {
    Object.assign(this, props);
  }
}
