const getData = require("./getData");
const axios = require("axios");

// мокаем данные, которые будет возвращать метод гет у аксиоса
jest.mock("axios");

describe("getData", () => {
  // создаем переменную
  let response;
  // перед каждым тестом присваиваем этой переменной какие-то моковые данные
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653",
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        },
      ],
    };
  });
  test("Корректное значение", async () => {
    // сейчас в переменной response у нас есть схема данных, которую нам возвращает бэк. Необходимо согласовать эту схему
    // с методом гет аксиоса.делаем так
    axios.get.mockReturnValue(response);
    // тем самым мы как бы сделали так, что наш гет запрос получает вот такие данные моковые

    const data = await getData();
    // проверяем, что функция вызывается хотя бы 1 раз
    expect(axios.get).toBeCalledTimes(1);
    // полученные данные прогоняем через нащу функцию getData
    expect(data).toEqual(["1", "2", "3"]);

    // также можно вызвать toMatchSnapshot, что позволит сохранить результаты выполнения теста в папке __snapshots__, после
    // чего мы сможем сравнить результаты выполнения прошлого теста и нынешнего (если они будут отличаться и падать)
    expect(data).toMatchSnapshot();
  });
});
