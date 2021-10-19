import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8834d5d3b8msh6f6122598e05789p1cab67jsnad36a7d57815'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) => ({url, header:cryptoNewsHeaders}); 

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetCryptosNewsQuery} = cryptoNewsApi;