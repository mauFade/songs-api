import { UpdateSongUseCase } from "./UpdateSongUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Update song", () => {
  const useCase = new UpdateSongUseCase({ create: createSpy, read: readSpy, update: updateSpy, delete: deleteSpy });

  it("Should update a song", async () => {
    await expect(
      useCase.execute({
        id: 1,
        name: "Song",
        artist: "Artist",
        gender: "Any",
        album: "Any",
      })
    ).resolves.not.toThrow();

    expect(updateSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      useCase.execute({
        id: 0,
        name: "Song",
        artist: "Artist",
        gender: "Any",
        album: "Any",
      })
    ).rejects.toThrow();
  });
});
