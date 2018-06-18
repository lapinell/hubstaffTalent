import React from 'react';
import {Row, Col, Input} from 'antd';
import 'antd/dist/antd.css';
import './SearchBar.css';

const Search = Input.Search;

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return (
             <Row id="searchBar">
                <Col span={24}>
                    <Search id="searchBox"
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={(value) => {
                        console.log(value);
                        this.onInputChange(value);
                        }
                    }
                    />
                </Col>
            </Row>
        )}

        onInputChange(term) {
            this.setState({term});
            this.props.onSearchChange(term);
        }
};

export default SearchBar;