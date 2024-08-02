import { configureStore } from "@reduxjs/toolkit";
import {portFolioApi} from '../api/apiSlice'
export const Store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    [portFolioApi.reducerPath]: portFolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portFolioApi.middleware),
});