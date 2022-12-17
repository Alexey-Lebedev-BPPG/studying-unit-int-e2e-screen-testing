import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import { createReduxStore } from "../../store/store";

// interface IRenderTestApp {
//   initialState: any;
//   initialRoute: any;
// }

export const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialStore);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
