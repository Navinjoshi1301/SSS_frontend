import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, configUrl } from "./Config";

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   endpoints: (builder) => ({
//     getFooterData: builder.query({
//       query: () => 'footer',
//     }),
//   }),
// });

export const portFolioApi = createApi({
  reducerPath: "portFolioApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getLogos: builder.query({
      query: ({ populate }) => ({
        url: configUrl.getLogos + populate,
      }),
    }),

    getAboutUs: builder.query({
      query: ({ populate }) => ({
        url: configUrl.getAboutUs + populate,
      }),
    }),

    getServices: builder.query({
      query: ({ populate }) => ({
        url: configUrl.getServices + populate,
      }),
    }),

  }),
});

export const { useGetLogosQuery, useGetAboutUsQuery, useGetServicesQuery } = portFolioApi;
