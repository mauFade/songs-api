import { ListAlbumsUseCase } from "./ListAlbumsUseCase";

const createSpy = jest.fn();
const readSpy = jest.fn();
const updateSpy = jest.fn();
const deleteSpy = jest.fn();

describe("Read albums tests", () => {
  const useCase = new ListAlbumsUseCase({
    create: createSpy,
    read: readSpy,
    update: updateSpy,
    delete: deleteSpy,
  });

  it("Should return all albums", async () => {
    expect(useCase.execute()).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });
});
