import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {createReduxStore} from './store/store';

// чтоб работали модули axios в package.json необходимо добавить:
// "jest": {
//   "transformIgnorePatterns": [
//     "node_modules/(?!(axios)/)"
//   ]
// },

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createReduxStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
