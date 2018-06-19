import React from 'react';
import {Row, Col, Menu} from 'antd';
import 'antd/dist/antd.css';
import './NavBar.css';
import LogoImg from '../images/nss-logo-compact.png';


let Nav = () => {
        return (
            <Menu id="nav-top" mode="horizontal">
                <Menu.Item>How It Works</Menu.Item>
                <Menu.SubMenu title="Browse">
                    <Menu.Item>Submenu Item</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item>Search</Menu.Item>
                <Menu.Item>My Account</Menu.Item>
            </Menu>
        );
};

let Logo = () => {
    return (
            <img id="logo-top" src={LogoImg} alt="hubstaff talent logo" />
    )
};

let NavBar = () => {
    return (
    <Row id="navBar">
        <Col span={4}>
            <Logo />
        </Col>
        <Col span={16} offset={4}> 
            <Nav />
        </Col>
    </Row>
    );
};

export default NavBar;