import React from 'react';
import { Menu, Submenu } from 'antd';

let Nav = () => {
        return (
            <Menu>
                <Menu.Item>Hot it works</Menu.Item>
                <Submenu title="Browse">
                    <Menu.Item>Submenu Item</Menu.Item>
                </Submenu>
                <Menu.Item>Search</Menu.Item>
                <Menu.Item>My Account</Menu.Item>
            </Menu>
        );
};

let Logo = "Hubstaff Talent";

let NavBar = () => {
    return (
    <div>
        <Logo />
        <Nav />
    </div>
    );
};