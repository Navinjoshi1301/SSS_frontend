import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, configUrl } from './config';

export const portFolioApi = createApi({
  reducerPath: 'portFolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => ({
        url: configUrl.getAboutUs,
      }),
    }),
    getInnovations: builder.query({
      query: () => ({
        url: configUrl.getInnovations,
      }),
    }),
    getLogos: builder.query({
      query: () => ({
        url: configUrl.getLogos,
      }),
    }),
    getProjects: builder.query({
      query: () => ({
        url: configUrl.getProjects,
      }),
    }),
    getServices: builder.query({
      query: () => ({
        url: configUrl.getServices,
      }),
    }),
    getTeams: builder.query({
      query: () => ({
        url: configUrl.getTeams,
      }),
    }),
    getTestimonials: builder.query({
      query: () => ({
        url: configUrl.getTestimonials,
      }),
    }),
  }),
})


export const {
  useGetAboutUsQuery,
  useGetInnovationsQuery,
  useGetLogosQuery,
  useGetProjectsQuery,
  useGetServicesQuery,
  useGetTeamsQuery,
  useGetTestimonialsQuery,
} = portFolioApi;