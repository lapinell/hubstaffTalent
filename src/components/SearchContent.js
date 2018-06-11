import React from 'react';
import  SearchBar from './SearchContent/SearchBar';
import FilterSidebar from './SearchContent/FilterSidebar.js';

export default class SearchContent extends React.Component {
    render() {
        return (
            <div id="SearchContent">
                <FilterSidebar />
                <SearchBar />
            </div>
        )
    }
}

