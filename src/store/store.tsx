import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./notes/notesSlice";
import { apiSlice } from "./weather/weather-api-slice";
import tictactoeReducer from "./tictactoe/tictactoeSlice";
export const store = configureStore({
  reducer: {
    notes: notesReducer,
    tictactoe: tictactoeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
