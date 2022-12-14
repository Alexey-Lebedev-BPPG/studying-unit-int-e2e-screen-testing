import { jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import {Users} from "./Users";
import axios from "axios";

// мокаем данные, которые будет возвращать метод гет у аксиоса
jest.mock("axios");

describe("USERS TEST", () => {
  // создаем переменную
  let response;
  // перед каждым тестом присваиваем этой переменной какие-то моковые данные
  beforeEach(() => {
    response = {
      data: [
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
        { id: 3, name: "Clementine Bauch" },
      ],
    };
  });

  test("renders components", async () => {
    // сейчас в переменной response у нас есть схема данных, которую нам возвращает бэк. Необходимо согласовать эту схему
    // с методом гет аксиоса.делаем запрос
    axios.get.mockReturnValue(response);
    render(<Users />);
    // получаем данные и отображаем элементы
    const users = await screen.findAllByTestId("user-item");
    // ожидаем, что мы получим 3 юзеров, т.к. мы замокали 3 шт.
    expect(users.length).toBe(3);
    // проверяем, что функция вызывается хотя бы 1 раз
    expect(axios.get).toBeCalledTimes(1);
  });
});
