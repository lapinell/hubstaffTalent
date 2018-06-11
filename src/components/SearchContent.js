import React from 'react';
import { Row } from 'antd';
import  SearchBar from './SearchContent/SearchBar';
import FilterSidebar from './SearchContent/FilterSidebar';
import FeaturedSidebar from './SearchContent/FeaturedSidebar';
import Results from './SearchContent/Results';

export default class SearchContent extends React.Component {
    render() {
        return (
            <div id="SearchContent">
                <SearchBar />
                <Row>
                    <FilterSidebar />
                    <Results />
                    <FeaturedSidebar />
                </Row>
            </div>
        )
    }
}

