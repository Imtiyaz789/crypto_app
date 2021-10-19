import React from 'react';
import millify from 'millify';
import moment from 'moment';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { Link } from 'react-router-dom'
import {useGetCryptosNewsQuery} from '../services/cryptoNewsApi'
const{ Title, Text} = Typography;
const {Option} = Select;

const News = (simplified) => {
    const {data : cryptoNews} = useGetCryptosNewsQuery({newsCategory : 'Cryptocurrency', count : simplified ? 10 : 100})
    return (
        <div>
            News
        </div>
    )
}

export default News
