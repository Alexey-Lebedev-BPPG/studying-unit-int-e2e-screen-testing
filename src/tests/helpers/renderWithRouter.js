import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/AppRouter";

// функция принимает тестируемый компонент и initial роут
export const renderWithRouter = (component, initialRoute = "/") => {
  // возвращает компонент, обернутый мемори и добавлены все роуты приложения
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
