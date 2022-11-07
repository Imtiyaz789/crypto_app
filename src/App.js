import React from 'react'
import './App.css'
import Demo from './components/Loader'
import {Switch, Link, Route} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar, Homepage, CryptoDetails, Cryptocurrencies, Exchanges, News} from './components'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
                <Demo/>
            </div>
            {/* This is main Content Section */}
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                {/* this is footer section */}
                <div className="footer">
                    <Typography.Title level={5} style={{color: 'white', textAlign:'center'}}>
                        Crypto App <br />
                        All Rights Reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
