import { Menu , Layout} from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Link , useLocation } from "react-router-dom";
const { Header} = Layout;

const HeaderLogo = styled.div`
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
`
const HeaderAdmin = (props) => {

    const {partname} = useLocation();
    return (
        <> 
            <Header className="header">
                <Link to="/">
                    <HeaderLogo />  
                </ Link>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={partname}>
                <Menu.Item  key="/search">
                    <Link to="/search">search movie </ Link>
                    </Menu.Item>
                <Menu.Item key="/popular">
                    <Link to="/popular">popular moviemoive</Link>
                </Menu.Item>
                <Menu.Item key="/upcomming">
                    <Link to="/upcomming">upcomming movie</Link>
                </Menu.Item>
                <Menu.Item key="/login">
                    <Link to="/login">Login</Link>
                </Menu.Item>
                </Menu>
            </Header>
        </>
    )
}

export default React.memo(HeaderAdmin) ;