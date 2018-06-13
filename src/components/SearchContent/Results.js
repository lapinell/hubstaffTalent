import React from 'react';
import 'antd/dist/antd.css';
import { Col, Menu, Dropdown, Button, Pagination } from 'antd';
import SingleResult from './Results/SingleResult';
import './Results.css';

let SortByMenu = (
    <Menu>
        <Menu.Item>
            <a>Relevance</a>
        </Menu.Item>
        <Menu.Item>
            <a>Newest to Oldest</a>
        </Menu.Item>
        <Menu.Item>
            <a>Oldest to Newest</a>
        </Menu.Item>
    </Menu>
);

let ResultsHeader = (props) => {
    
    return (
        <div id="results-header" >
            <h2>Results {props.number}</h2>
            <Dropdown overlay={SortByMenu} trigger={['click']}>
                <Button>Sort by</Button>
            </Dropdown>
        </div>

    )

}

let ResultsFooter = (props) => {

    return (
        <div id="results-footer">
            <Pagination defaultCurrent={1} total={500} />
        </div>
    )

}

let ResultsList = (props) => { //compiles the jobs results array into single result components
    const resultsArray = props.jobList;

    const skillsList = ["ui", "ux", "reactjs", "html5", "antdesign", "bootstrap", "firebase", "API integration"];

    
    const results = resultsArray.map((job, index) => {
        
        // This is how I would parse the HTML description had it been short paragraph instead of a full description
        // let HTMLdescription = job.description;
        // var nonHTMLdescription = HTMLdescription.replace(/<p>|<\/p>/ig, '') 
        
        return (
        <SingleResult key={index} jobKey={job.id} title={job.title} availability={job.type} payRate="$55/hr" description="This is a short description of the role that will make you interested in clicking through and seeing the full description." company={job.company} location={job.location} replyRate="88%" skills={skillsList} />
        );
    });

    return results;
}

let Results = (props) => {

    let jobsArray = props.jobs; //in comes the data
    console.log('jobsArray:', jobsArray.data);

    return (
        <Col span={12} id="results-container">
            <div id="results">
                <ResultsHeader />
                <ResultsList jobList={jobsArray.data} />
            </div>
            <ResultsFooter />
        </Col>
    )

}

export default Results;