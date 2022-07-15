import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./notes/notesSlice";
import { apiSlice } from "./weather/weather-api-slice";
import tictactoeReducer from "./tictactoe/tictactoeSlice";
import carsReducer from "./cars/carsSlice";
export const store = configureStore({
  reducer: {
    notes: notesReducer,
    tictactoe: tictactoeReducer,
    cars: carsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
