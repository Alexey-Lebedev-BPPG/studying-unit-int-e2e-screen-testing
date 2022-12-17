import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createReduxStore } from "./store/store";

// в package.json необходимо добавить:
// "jest": {
//   "transformIgnorePatterns": [
//     "node_modules/(?!(axios)/)"
//   ]
// },
// чтоб работали модули axiosa

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
