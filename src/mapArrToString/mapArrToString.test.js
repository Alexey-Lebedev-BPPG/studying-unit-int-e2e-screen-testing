const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
  test("Корректное значение", () => {
    // если применить toBe, то тест вернет ошибку, т.к. сравнивает объекты по ссылке. Поэтому применяем toEqual, который
    // сравнивает содержимое объектов
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Мешанина", () => {
    expect(mapArrToString([1, 2, 3, null, undefined, "asdasd"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("Пустой массив", () => {
    expect(mapArrToString([])).toEqual([]);
  });

  // делаем отрицательный кейс с приставкой not (как бы говорим, что не равен)
  test("Отрицание", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });

});
