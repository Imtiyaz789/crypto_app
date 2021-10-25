import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '1b89cc3e17msh5312576a6b5eaeap183e74jsn1df25a891e9d'
  }
//   665d6b525a4546218e10cd1a95e64d8d
  const baseUrl = 'https://secret-ocean-49799.herokuapp.com/https://bing-news-search1.p.rapidapi.com';

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
// search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}
export const {useGetCryptosNewsQuery} = cryptoNewsApi;