import React from 'react';
import { Row, Col, Spin } from 'antd';
import  SearchBar from './SearchContent/SearchBar';
import FilterSidebar from './SearchContent/FilterSidebar';
import FeaturedSidebar from './SearchContent/FeaturedSidebar';
import Results from './SearchContent/Results';
import './SearchContent.css';
import { apiGETall } from '../API-interactions/api-path';
import { Search } from '../API-interactions/api-calls';



export default class SearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = { //assigns the initial state which will be the unfiltered results
          results: undefined
        };

        apiGETall()
        .then((data) => {
            // console.log('the data is:', data);
            this.setState({
                results: data
            });
        });

    };

   searchJobs(term) {
       Search(term)
       .then((data) => {
           this.setState({
               results: data
           });
       });
   }

    render() {

        // console.log('state is currently', this.state.results);

        let LoadResults = () => {
            if (this.state.results === undefined) {
                return (
                <Col span={12} id="results-container">
                    <div id="results">
                         <Spin className="spinner" size="large" />
                    </div>
                 </Col>
                )
            } else {
                return <Results jobs={this.state.results} />
            }
        };

        return (
            <div id="SearchContent">
                <Row>
                <SearchBar onSearchChange={term => this.searchJobs(term)} />
                    <FilterSidebar />
                    <LoadResults />
                    <FeaturedSidebar />
                </Row>
            </div>
        )
    }
}

