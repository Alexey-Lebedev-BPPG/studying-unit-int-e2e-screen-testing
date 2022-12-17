import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";

export const renderWithRedux = (component, initialStore) => {
  const store = createReduxStore(initialStore);

  return render(<Provider store={store}>{component}</Provider>);
};
