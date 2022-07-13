import { CreateSongUseCase } from "./CreateSongUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Create a song", () => {
  const useCase = new CreateSongUseCase({ create: createSpy, read: readSpy, update: updateSpy, delete: deleteSpy });

  it("Should create a song", async () => {
    await expect(
      useCase.execute({
        name: "Song",
        artist: "Artist",
        gender: "Any",
        album: "Any",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        name: "",
        artist: "Artist",
        gender: "Any",
        album: "Any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        name: "Any",
        artist: "",
        gender: "Any",
        album: "Any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        name: "Any",
        artist: "Artist",
        gender: "",
        album: "Any",
      })
    ).rejects.toThrow();
  });
});
