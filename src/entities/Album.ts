export class Album {
  public readonly id?: number;

  public name: string;
  public artist: string;
  public year: number;

  constructor(props: Omit<Album, "id">) {
    Object.assign(this, props);
  }
}
