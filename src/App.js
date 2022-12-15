// import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");

//   const onClick = () => setToggle((prev) => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   });
//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//       {/* попробуем получить данный элемент через id */}
//       {toggle && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: "red" }}>data</div>}
//       <h1>Hello World</h1>
//       <button onClick={onClick} data-testid="toggle-btn">
//         click me
//       </button>
//       <input
//         onChange={(event) => setValue(event.target.value)}
//         type="text"
//         placeholder="input value..."
//       />
//     </div>
//   );
// }

// export default App;

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      {/* делаем отдельный компонент для ссылок*/}
      <NavBar />
      {/* делаем отдельный компонент для роутов*/}
      <AppRouter />
    </div>
  );
}

export default App;
