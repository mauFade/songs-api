import { ListSongUseCase } from "./ListSongUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("List songs", () => {
  const useCase = new ListSongUseCase({ create: createSpy, read: readSpy, update: updateSpy, delete: deleteSpy });

  it("Should return all songs", async () => {
    await expect(useCase.read()).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });
});
