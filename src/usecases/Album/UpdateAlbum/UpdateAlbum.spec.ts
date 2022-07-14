import { UpdateAlbumUseCase } from "./UpdateAlbumUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Update album tests", () => {
  const useCase = new UpdateAlbumUseCase({ create: createSpy, read: readSpy, update: updateSpy, delete: deleteSpy });

  it("Should update a album", async () => {
    expect(
      useCase.update({
        id: 1,
        name: "any",
      })
    ).resolves.not.toThrow();

    expect(updateSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    expect(
      useCase.update({
        id: 0,
      })
    ).rejects.toThrow();
  });
});
