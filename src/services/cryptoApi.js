import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import axios from 'axios';

const cryptoApiHeaders = {
    method: 'GET',
    // mode: 'no-cors',
    url: 'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2',
    headers: {
      'x-access-token': 'coinrankinga8cb41c3390cc02c1cea1ebe71b9617b07af9352837093e6'
    }
};

const baseUrl = 'https://secret-ocean-49799.herokuapp.com/https://api.coinranking.com/v2';

const createRequest = (url) => ({url, header:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        })
    })
})

export const {useGetCryptosQuery, useGetCryptosDetailsQuery} = cryptoApi;