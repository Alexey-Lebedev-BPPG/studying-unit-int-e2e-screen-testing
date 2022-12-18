const HelloPage = require("../pages/hello.page");

// чтоб запустить конкретный файл с тестами: `npm run test:e2e --spec hello.e2e.js`
describe("My hello page", () => {
  it("should toggle", async () => {
    // вызываем метод open из файла hello.page.js для открытия нашей страницы
    await HelloPage.open();
    // потом вызываем наш метод по логике действий
    await HelloPage.toggleTitleWithInput("hello");
    // проверяем, что наш заголовок появляется на странице (через toBeExisting)
    await expect(HelloPage.helloTitle).toBeExisting();
    // нажимаем еще раз на кнопку
    await HelloPage.toggleBtn.click();
    // и проверяем, что заголовок отсутствует на странице
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it("should not toggle", async () => {
    // вызываем метод open из файла hello.page.js для открытия нашей страницы
    await HelloPage.open();
    // потом вызываем наш метод по логике действий
    await HelloPage.toggleTitleWithInput("asdawdawd");
    // проверяем, что наш заголовок не появляется на странице (через toBeExisting)
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
