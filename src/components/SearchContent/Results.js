import React from 'react';
import 'antd/dist/antd.css';
import { Col, Menu, Dropdown, Button, Pagination } from 'antd';

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
            <Pagination defaultCurrent={6} total={500} />
        </div>
    )

}

let Results = () => {

    return (
        <Col span={12} id="results">
            <ResultsHeader />
            <ResultsFooter />
        </Col>
    )

}

export default Results;