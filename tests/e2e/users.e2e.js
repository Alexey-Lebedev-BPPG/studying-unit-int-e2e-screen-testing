const UserPage = require("../pages/users-test.page");

// чтоб запустить конкретный файл с тестами: `npm run test:e2e --spec hello.e2e.js`
describe("Users page", () => {
  it("load data", async () => {
    // вызываем метод loadData из файла users-test.page.js для открытия нашей страницы и получения данных
    await UserPage.loadData();
  });

  it("delete user", async () => {
    // вызываем метод loadData из файла users-test.page.js для открытия нашей страницы и получения данных
    // await UserPage.loadData();
    await UserPage.deleteUser();
  });
});
