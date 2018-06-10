import React from 'react';
import { Row } from 'antd';
import FooterCol from './Footer/FooterColumn';

let Footer = () => {
    return (
        <Row type="flex" justify="center">
            <FooterCol title="Logo" />
            <FooterCol title="Talent" links={testList}/>
            <FooterCol title="HubStaff" links={testList}/>
            <FooterCol title="Support" links={testList}/>
            <FooterCol title="Social" links={testList}/>
        </Row>
    )
}


let testList = [
    {
        "title": "Link1",
        "src": "#1"
    },
    {
        "title": "Link2",
        "src": "#2"
    },
    {
        "title": "Link3",
        "src": "#3"
    },
    {
        "title": "Link4",
        "src": "#4"
    },
    {
        "title": "Link5",
        "src": "#5"
    }
]
export default Footer;