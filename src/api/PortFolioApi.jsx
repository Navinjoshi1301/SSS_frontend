import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, configUrl } from './Config';

export const portFolioApi = createApi({
  reducerPath: 'portFolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getLogos: builder.query({
      query: ({populate}) =>({
        url: configUrl.getLogos+populate,
      }),
    }),
    getServices: builder.query({
      query: ({populate}) =>({
        url: configUrl.getServices+populate,
      }),
    }),
    getAboutUs: builder.query({
      query: ({populate}) =>({
        url: configUrl.getAboutUs+populate,
      }),
    }),
    getInnovations: builder.query({
      query: () =>({
        url: configUrl.getInnovations,
      }),
    }),
  }),
})


export const { useGetLogosQuery ,useGetServicesQuery,useGetAboutUsQuery  ,useGetInnovationsQuery} = portFolioApi;
