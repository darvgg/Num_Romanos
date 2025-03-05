import { convertir } from "./romanos.js";

describe("Convertir los números", () => {
  it("Debería convertir 1 a I", () => {
    expect(convertir(1)).toEqual("I");
  });
  it("Debería convertir 2 a I", () => {
    expect(convertir(2)).toEqual("II");
  });
});
