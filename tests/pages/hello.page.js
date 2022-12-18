/* eslint-disable no-undef */
const Page = require("./page");

// создаем класс нашей страницы
class HelloPage extends Page {
  // получаем наш элемент по айди
  get toggleBtn() {
    return $("#toggle");
  }

  get searchInput() {
    return $("#search");
  }

  get helloTitle() {
    return $("#hello");
  }

  // делаем метод, который переключит отображение нашего заголовка. !!!Важно!!! Все методы лучше всего делать асинхронными, т.к. они проходят в браузере и на них требуется время.
  async toggleTitleWithInput(text) {
    // вводим значение в инпут
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }
  // какую страницу будем открывать для этого класса
  open() {
    return super.open("/hello");
  }
}

module.exports = new HelloPage();
