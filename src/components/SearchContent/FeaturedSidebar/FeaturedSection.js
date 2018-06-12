import React from 'react';
import 'antd/dist/antd.css';
import './FeaturedSection.css';
import FeaturedJob from './FeaturedJob';

let FeaturedSection = (props) => {

    return (
        <div id={props.id} className="featuredSection">
            <h3>{props.title}</h3>
            <hr />
            <FeaturedJob title="Job Title" payRate="$22/hr" description="A really small description about the featured job to entice candidates to click through."/>
            <FeaturedJob title="Job Title 2" payRate="$25/hr" description="A really small description about the featured job to entice candidates to click through."/>
        </div>
    );

};

export default FeaturedSection;