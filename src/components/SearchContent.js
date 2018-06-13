import React from 'react';
import { Row } from 'antd';
import  SearchBar from './SearchContent/SearchBar';
import FilterSidebar from './SearchContent/FilterSidebar';
import FeaturedSidebar from './SearchContent/FeaturedSidebar';
import Results from './SearchContent/Results';
import './SearchContent.css';

export default class SearchContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { //assigns the initial state which will be the unfiltered results
          results: [
            {
              title: "Example Job Title from State",
              availability: "part-time",
              payRate: "$55/hr",
              company: "Example Company",
              location: "Example, TN",
              replyRate: "40%",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
              skills: ["ux", "reactjs", "ui design", "nodejs", "ant.design"]
          },
          {
            title: "Example 2 Job Title from State",
            availability: "full-time",
            payRate: "$105/hr",
            company: "Example 2 Company",
            location: "Example 2, CA",
            replyRate: "100%",
            description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
            skills: ["bootsrap", "angular 4", "ui development", "c#"]
        }
          ]
        }
      }

    render() {

        console.log('state is currently', this.state.results);

        return (
            <div id="SearchContent">
                <SearchBar />
                <Row gutter={16}>
                    <FilterSidebar />
                    <Results jobs={this.state.results}/>
                    <FeaturedSidebar />
                </Row>
            </div>
        )
    }
}

