import { CreateAlbumUseCase } from "./CreateAlbumUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Create album tests", () => {
  const createUseCase = new CreateAlbumUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should create a album", async () => {
    await expect(
      createUseCase.execute({
        name: "Any",
        artist: "Artist",
        year: 2022,
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error", async () => {
    await expect(
      createUseCase.execute({
        name: "",
        artist: "Artist",
        year: 2022,
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      createUseCase.execute({
        name: "Any",
        artist: "",
        year: 2022,
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      createUseCase.execute({
        name: "Any",
        artist: "Artist",
        year: 0,
      })
    ).rejects.toThrow();
  });

  it("Should throw error", async () => {
    await expect(
      createUseCase.execute({
        name: "Any",
        artist: "Artist",
        year: -1,
      })
    ).rejects.toThrow();
  });
});
