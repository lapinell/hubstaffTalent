import React from 'react';
import 'antd/dist/antd.css';

let FilterCategory = (props) => { //has props of id, title and filterInput
    return (
        <div class="filterCat" id={props.id}>
            <p>{props.title}</p>
            {props.filters}  {/* filters is a function that returns the proper filter input types of text values of those filters */}
        </div>
    )
};

export default FilterCategory;