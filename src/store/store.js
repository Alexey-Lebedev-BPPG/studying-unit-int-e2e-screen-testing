import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const createReduxStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    // задаем начальное показание стейта при загрузке сайта
    // preloadedState: {
    //   counter: {
    //     value: 10000,
    //   },
    // },
    preloadedState: initialState,
  });
