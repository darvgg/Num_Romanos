import { convertir } from "./romanos.js";

describe("Convertir los números", () => {
  it("Debería convertir 1 a I", () => {
    expect(convertir(1)).toEqual("I");
  });
  it("Debería convertir 2 a I", () => {
    expect(convertir(2)).toEqual("II");
  });
  it("Debería convertir 4 a IV", () => {
    expect(convertir(4)).toEqual("IV");
  });
  it("Debería convertir 5 a V", () => {
    expect(convertir(5)).toEqual("V");
  });
  it("Debería convertir 7 a VII", () => {
    expect(convertir(7)).toEqual("VII");
  });
  it("Debería convertir 53 a LIII", () => {
    expect(convertir(53)).toEqual("LIII");
  });
  it("Debería convertir 500 a D", () => {
    expect(convertir(500)).toEqual("D");
  });
  it("Debería convertir 1000 a M", () => {
    expect(convertir(1000)).toEqual("M");
  });
});

describe("Mostrara error al enviar un numero mayor a 1000", () => {
  it("Verificando mensaje de error", () => {
    expect(convertir(1001)).toEqual("El limite es 1000");
  });
});
