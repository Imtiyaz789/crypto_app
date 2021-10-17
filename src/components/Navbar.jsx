import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeFilled, MoneyCollectFilled, BulbFilled, FundFilled, MenuOutlined} from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto App</Link>
                </Typography.Title>
            </div> 
            <Menu theme="dark">
                <Menu.Item icon={<HomeFilled/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundFilled/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectFilled/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbFilled/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>           
        </div>
    )
}

export default Navbar
