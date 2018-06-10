import React from 'react';
import {Row, Col, Menu} from 'antd';
import 'antd/dist/antd.css';


let Nav = () => {
        return (
            <Menu mode="horizontal">
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
            <p>Hubstaff Talent</p>
    )
};

let NavBar = () => {
    return (
    <Row>
        <Col span={4} pull={18}>
            <Logo />
        </Col>
        <Col span={16} push={4}>
            <Nav />
        </Col>
    </Row>
    );
};

export default NavBar;