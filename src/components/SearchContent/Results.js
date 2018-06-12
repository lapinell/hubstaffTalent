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
    
    let tagBadges = ['ux', 'ui', 'android', 'javascript', 'sketch'];

        console.log('tagBadges is:', tagBadges);
    
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

let Results = () => {
    let tagBadges = ['ux', 'ui', 'android', 'javascript', 'sketch'];
    return (
        <Col span={12} id="results-container">
            <div id="results">
                <ResultsHeader />
                <SingleResult title="Job Title" availability="full-time" company="Epic Coders" location="Indianaplis, IN" replyRate="82%" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum." skills={tagBadges}/>
                <SingleResult title="Job Title" availability="full-time" company="Epic Coders" location="Indianaplis, IN" replyRate="82%" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum." skills={tagBadges}/>
                <SingleResult title="Job Title" availability="full-time" company="Epic Coders" location="Indianaplis, IN" replyRate="82%" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum." skills={tagBadges}/>
                <SingleResult title="Job Title" availability="full-time" company="Epic Coders" location="Indianaplis, IN" replyRate="82%" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum." skills={tagBadges}/>
                <SingleResult title="Job Title" availability="full-time" company="Epic Coders" location="Indianaplis, IN" replyRate="82%" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum." skills={tagBadges}/>
            </div>
            <ResultsFooter />
        </Col>
    )

}

export default Results;