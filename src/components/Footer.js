import React from 'react';
import { Row } from 'antd';
import FooterCol from './Footer/FooterColumn';
import './Footer.css';

let Footer = () => {
    return (
        <Row id="hs-footer" type="flex" justify="center">
            <FooterCol id="footer-logo" title="Logo" />
            <FooterCol id="footer-talent" title="Talent" links={testList}/>
            <FooterCol id="footer-hubstaff" title="HubStaff" links={testList}/>
            <FooterCol id="footer-support" title="Support" links={testList}/>
            <FooterCol id="footer-social" title="Social" links={testList}/>
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