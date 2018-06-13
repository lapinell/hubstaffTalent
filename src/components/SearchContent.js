import React from 'react';
import { Row, Col } from 'antd';
import  SearchBar from './SearchContent/SearchBar';
import FilterSidebar from './SearchContent/FilterSidebar';
import FeaturedSidebar from './SearchContent/FeaturedSidebar';
import Results from './SearchContent/Results';
import './SearchContent.css';
import { apiGETall } from '../API-interactions/api-path';



export default class SearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = { //assigns the initial state which will be the unfiltered results
          results: undefined
        }

    };

   componentDidMount() {
    apiGETall()
    .then((data) => {
        // console.log('the data is:', data);
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
                        <h1>Loading...</h1>
                    </div>
                 </Col>
                )
            } else {
                return <Results jobs={this.state.results} />
            }
        };

        return (
            <div id="SearchContent">
                <SearchBar />
                <Row gutter={16}>
                    <FilterSidebar />
                    <LoadResults />
                    <FeaturedSidebar />
                </Row>
            </div>
        )
    }
}

