import React from 'react';
import {Row, Col, Input} from 'antd';
import 'antd/dist/antd.css';

const Search = Input.Search;

class SearchBar extends React.Component {
    render() {
        return (
             <Row>
                <Col span={16} offset={4}>
                    <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                    />
                </Col>
            </Row>
        )}
};

export default SearchBar;