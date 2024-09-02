import { configureStore } from "@reduxjs/toolkit";
import gitUser from "../feature/gitUserSlice";
export const store = configureStore(
  {
    reducer: {
      app: gitUser,
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
