import { configureStore } from "@reduxjs/toolkit";
import reducerFunctions from "./reducerFunctions";

// In order to give access to reduxStore to all the components of the app, wrap <APP> with <Provider> in main.jsx
// In Redux toolkit the configure store function automatically adds the thunk middleware in it along with other default middlewares .No need to explicitly mention that

export const reduxStore = configureStore({
  reducer: reducerFunctions,
});
