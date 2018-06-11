import React from 'react';
import 'antd/dist/antd.css';
import { Col } from 'antd';
import FilterCategory from './FilterSidebar/FilterCategory';

class FilterSidebar extends React.Component {

    render() {
        return (
            <Col id="filterSidebar">
                <div id="filterSidebar-header">
                    <h2>Filters</h2>
                    <p id="clearAllFilters"><a href="#">Clear all filters</a></p>
                </div>
                <FilterCategory id="filter-skills" title="Skills" filters="keyword tags" />
                <FilterCategory id="filter-availability" title="Availability" filters="checkboxes" />
                <FilterCategory id="filter-job" title="Job Type" filters="dropdown" />
                <FilterCategory id="filter-pay" title="Pay Rate" filters="range" />
                <FilterCategory id="filter-experience" title="Experience Level" filters="dropdown" />
                <FilterCategory id="filter-countries" title="Countries" filters="keyword tags" />
                <FilterCategory id="filter-languages" title="Languages" filters="keyword tags" />
            </Col>
        );
    };
}

export default FilterSidebar; 