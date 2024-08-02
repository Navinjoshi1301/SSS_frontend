import { configureStore } from '@reduxjs/toolkit';
import { portFolioApi } from '../Api/portFolioApi';

const store = configureStore({
  reducer: {
    [portFolioApi.reducerPath]: portFolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portFolioApi.middleware),
});

export default store;