import { configureStore } from "@reduxjs/toolkit";
import { PreloadedState } from "redux";
import rootReducer, { RootState } from "../reducers";

const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootStore = ReturnType<typeof rootReducer>;

export default store;
