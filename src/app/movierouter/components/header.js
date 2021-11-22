import { Layout, Menu } from 'antd';
import React from 'react';
import styled from "styled-components";
import { Link ,useLocation } from "react-router-dom";

const LogoComponent = styled.div `
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
`

const { Header } = Layout;

const HeaderMovie = () => {

    const {pathName} = useLocation();
    return(
        <>
            <Header className="header">
                <LogoComponent />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathName}>
                    <Menu.Item key="/popularmovie">
                        <Link to="/popularmovie">Popular Movie</Link>
                    </Menu.Item>
                    <Menu.Item key="/search">
                        <Link to="/search">Search</Link>
                    </Menu.Item>
                    <Menu.Item key="/upcomming">
                        <Link to="/upcomming">Up Comming</Link>
                    </Menu.Item>
                    <Menu.Item key="/login">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    )
}

export default React.memo(HeaderMovie);