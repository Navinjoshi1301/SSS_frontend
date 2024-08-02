import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, configUrl } from '../store/config';

export const portFolioApi = createApi({
  reducerPath: 'portFolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getLogos: builder.query({
      query: ({populate}) =>({
        url: configUrl.getLogos+populate,
      }),
    }),
  }),
})


export const { useGetLogosQuery } = portFolioApi;