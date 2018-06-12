import React from 'react';
import 'antd/dist/antd.css';

let FeaturedSection = (props) => {

    return (
        <div id={props.id} className="featuredSection">
            <h3>{props.title}</h3>
            <hr />
            {props.jobs} {/* An array of featured jobs */}
        </div>
    );

};

export default FeaturedSection;