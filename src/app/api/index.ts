import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allGamesApi = createApi({
  reducerPath: 'allGamesApi',
  tagTypes: ['gamesData'],
  baseQuery: fetchBaseQuery({
    // baseUrl: '/api/',
    baseUrl: 'https://belparyaj.com/pragmatic/game/list?partner_name=belparyaj'
  }),
  endpoints: (build) => ({
    fetchAllGamesData: build.query({
      query: () => ({
        // url: 'games',
        url: '/'
      }),
    }),
  }),
});
