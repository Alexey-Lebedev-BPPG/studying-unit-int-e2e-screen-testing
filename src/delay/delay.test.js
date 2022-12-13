const delay = require("./delay");

describe("delay", () => {
  // добавляем async, чтоб проверить асинхронную функцию
  test("Корректное значение", async () => {
    // результат выполнения функции помещаем в переменную 
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});
