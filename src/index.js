import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
    <App />
  </React.StrictMode>
);
