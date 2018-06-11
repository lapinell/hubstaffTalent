import React from 'react';
import 'antd/dist/antd.css';
import { Col, Button } from 'antd';

let FeaturedSidebar = () => {

    return (
        <Col id="featuredSidebar">
            <CallToAction />
        </Col>
    );

}

let CallToAction = () => {
    
    return (
        <div id="c2a-signup" className="callToAction">
            <img src="#" alt="icon depicting connection" />
            <h2>Track time on Hubstaff</h2>
            <p>Pay only for the hours worked</p>
            <Button type="primary">Sign Up</Button>
            <p><a href="#">Learn more.</a></p>
        </div>
    );

}

export default FeaturedSidebar;