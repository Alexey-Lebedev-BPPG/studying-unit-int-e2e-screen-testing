import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("TEST APP", () => {
  test("router test", () => {
    render(
      // помещаем тестируемый компонент в спец обертку (иначе работать не будет)
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // создаем переменные ссылок
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    // нажимаем на одну из них
    userEvent.click(aboutLink);
    // проверяем что появился элемент
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("Error router test", () => {
    render(
      // помещаем тестируемый компонент в спец обертку (иначе работать не будет). Здесь же можно передать в initialEntries массив рандомных путей, по которым будет рендериться этот компонент
      <MemoryRouter initialEntries={["/asdasd"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
