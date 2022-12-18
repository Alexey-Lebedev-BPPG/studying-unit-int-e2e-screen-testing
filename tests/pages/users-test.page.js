/* eslint-disable no-undef */
const Page = require("./page");

// создаем класс нашей страницы
class UserPage extends Page {
  // получаем наш тайтл загрузки
  get loadingTitle() {
    return $("#users-loading");
  }

  // получаем нашу обертку юзеров
  get usersList() {
    return $("#users-list");
  }

  // получаем сам массив пользователей
  get usersItems() {
    // получаем массив компонетов User (если указывать одну $, то получим 1 компонент, если 2 - то массив компонентов)
    return browser.react$$("User");
  }

  // делаем метод загрузки данных
  async loadData() {
    // оборачиваем все в try/catch, чтоб обработать логичной ошибкой
    try {
      // открываем нашу страницу
      await this.open();
      // ждем, пока появится заголовок "Идет загрузка...". С помощью этого метода, мы можем задать таймаут, через какое время появится элемент (т.е. если он не появится через 2с, то будет ошибка)
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      // затем ожидаем, что через 2с должен появится наша обертка юзеров
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    // **************** Здесб при выполнении теста падает ошибка.необходимо потом разобраться (предположение на browser.react$$("User"))
    try {
      // получаем количество наших пользователей
      const usersCount = await this.usersItems.length;

      if (!usersCount) throw new Error("Пользователи не найдены");

      // получаем нашу кнопку удаления и нажимаем на нее
      await this.usersItems[0].$("#user-delete").click();
      // опять получаем длину массива пользователей, чтоб потом проверить, что она уменьшилась на единицу
      const usersCountAfterDelete = await this.usersItems.length;

      if (usersCount - usersCountAfterDelete !== 1)
        throw new Error("Удаление не произошло или удалился более 1 юзера");
    } catch (error) {
      throw new Error("Не удалось удалить пользователя" + error.message);
    }
  }

  // какую страницу будем открывать для этого класса
  open() {
    return super.open("/users-test");
  }
}

module.exports = new UserPage();
