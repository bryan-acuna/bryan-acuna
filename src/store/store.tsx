import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./notes/notesSlice";
import { apiSlice } from "./weather/weather-api-slice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
