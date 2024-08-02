import { configureStore } from "@reduxjs/toolkit";
import { portFolioApi } from "../APIs/ApiSlices";

export const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    [portFolioApi.reducerPath]: portFolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portFolioApi.middleware),
});
