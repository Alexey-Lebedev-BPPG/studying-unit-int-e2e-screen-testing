import { jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

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
  // после каждого теста сбрасываем моки
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders components", async () => {
    // сейчас в переменной response у нас есть схема данных, которую нам возвращает бэк. Необходимо согласовать эту схему
    // с методом гет аксиоса.делаем запрос
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    // получаем данные и отображаем элементы
    const users = await screen.findAllByTestId("user-item");
    // ожидаем, что мы получим 3 юзеров, т.к. мы замокали 3 шт.
    expect(users.length).toBe(3);
    // проверяем, что функция вызывается хотя бы 1 раз
    expect(axios.get).toBeCalledTimes(1);
  });

  test("redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    // render(
    //   // если оставить так, то тест будет падать в ошибку, т.к. мы пытаемся перейти на роут, которого нет в компоненте юзерс (а именно на userDateilPage). Поэтому нам нужно добавить роуты, к которым мы хотим обратиться
    //   // <MemoryRouter>
    //   //   <Users />
    //   // </MemoryRouter>
    //   // вот так можно использовать отдельные роуты, которые нам необходимы
    //   // <MemoryRouter initialEntries={["/users"]}>
    //   //   <Routes>
    //   //     <Route path="/users" element={<Users />} />
    //   //     <Route path="/users/:id" element={<UserDetailsPage />} />
    //   //   </Routes>
    //   // </MemoryRouter>
    //   // если есть отдельный файл с роутами, то можно использовать его (+ просто добавляем тот компонент, который нам необходим)
    //   <MemoryRouter>
    //     <AppRouter />
    //     <Users />
    //   </MemoryRouter>
    // );
    // также можно пойти еще дальше и создать хелпер, с помощью которого будет использоваться эта логика
    // вызывать можно разными способами (полный пример в NavBar компоненте)
    // renderWithRouter(<Users />)
    // renderWithRouter(null, "/users");

    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    // нажимаем на первого юзера
    userEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
