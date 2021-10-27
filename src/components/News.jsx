import React from 'react';
import millify from 'millify';
import moment from 'moment';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { Link } from 'react-router-dom'
import {useGetCryptosNewsQuery} from '../services/cryptoNewsApi'
import Loader from './Loader'

const{ Title, Text} = Typography;
const {Option} = Select;

const News = (simplified) => {
    const {data : cryptoNews, isFetching} = useGetCryptosNewsQuery({newsCategory : 'Cryptocurrency', count : simplified ? 10 : 100});

    console.log(cryptoNews);
    if(isFetching) return <Loader/>;
    return (
        <div>
            
        </div>
    )
}

export default News
