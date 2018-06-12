import React from 'react';
import 'antd/dist/antd.css';

let FilterCategory = (props) => { //has props of id, title and filterInput
    return (
        <div className="filterCat" id={props.id}>
            <div className="filter-header">
                <p>{props.title}</p>
                <p className="clearFilter"><a href="#">Clear</a></p>
            </div>
            {props.filters}  {/* filters is a function that returns the proper filter input types of text values of those filters */}
        </div>
    )
};

export default FilterCategory;