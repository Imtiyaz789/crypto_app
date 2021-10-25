import React, {useEffect, useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeFilled, MoneyCollectFilled, BulbFilled, FundFilled, MenuOutlined} from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenResize, setScreenResize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenResize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    useEffect(() => {
        if(screenResize < 768) {
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
    }, [screenResize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto App</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)} >
                    <MenuOutlined/>
                </Button>
            </div> 
            {activeMenu && 
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
            }
                       
        </div>
    )
}

export default Navbar
