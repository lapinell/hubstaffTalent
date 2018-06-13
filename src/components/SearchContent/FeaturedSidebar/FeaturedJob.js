import React from 'react';
import 'antd/dist/antd.css';
import './FeaturedJob.css';

let FeaturedJob = (props) => {
    return (
        <div className="featuredJobResult">
            <div className="featuredJobTitle">
                <p className="featuredTitle">{props.title}</p>
                <p className="featuredPayRate">{props.payRate}</p>
            </div>
            <div className="featuredJobDescription">
                <p>{props.description}</p>
            </div>
        </div>
    )
};

export default FeaturedJob;