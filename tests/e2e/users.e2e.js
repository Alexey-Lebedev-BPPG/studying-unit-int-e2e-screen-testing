const UserPage = require('../pages/users-test.page');

// чтоб запустить конкретный файл с тестами: `npm run test:e2e --spec ./tests/e2e/users.e2e.js` и только тогда, когда проект ЗАПУЩЕН!!!
describe('Users page', () => {
  it('load data', async () => {
    // вызываем метод loadData из файла users-test.page.js для открытия нашей страницы и получения данных
    await UserPage.loadData();
  });

  it('delete user', async () => {
    // вызываем метод loadData из файла users-test.page.js для открытия нашей страницы и получения данных
    // await UserPage.loadData();
    await UserPage.deleteUser();
  });
});
