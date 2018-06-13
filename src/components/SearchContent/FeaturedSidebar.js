import React from 'react';
import 'antd/dist/antd.css';
import { Col, Button } from 'antd';
import FeaturedSection from './FeaturedSidebar/FeaturedSection';
import './FeaturedSidebar.css';

let FeaturedSidebar = () => {

    return (
        <Col span={6} id="featuredSidebar">
            <CallToAction />
            <FeaturedSection title="Top Jobs" id="featured-topJobs" jobs="some array" />
            <FeaturedSection title="Most Viewed This Week" id="featured-mostViewed" jobs="some array" />
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
            <p><a href="/">Learn more.</a></p>
        </div>
    );

}

export default FeaturedSidebar;