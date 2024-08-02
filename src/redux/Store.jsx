import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { portFolioApi } from '../api/PortFolioApi'


export const store = configureStore({
  reducer: {
    [portFolioApi.reducerPath]: portFolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portFolioApi.middleware),
})

setupListeners(store.dispatch)