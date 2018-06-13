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

let Results = (props) => {

    let jobsArray = props.jobs;

    console.log('Results component jobs prop:', jobsArray);

    let tagBadges = ['ux', 'ui', 'android', 'javascript', 'sketch'];

    let jobResults = jobsArray.map((obj) => {
        <SingleResult title={obj.title} availability={obj.availability} company={obj.company}location={obj.location} replyRate={obj.replyRate} description={obj.description} skills={obj.skills}/>
    })

    console.log('Job Results List', jobResults);

    return (
        <Col span={12} id="results-container">
            <div id="results">
                <ResultsHeader />
            </div>
            <ResultsFooter />
        </Col>
    )

}

export default Results;