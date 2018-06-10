import React from 'react';
import { Col } from 'antd';

let FooterCol = (props) => {
    if (props.links) {
        let linkarray = props.links;

        let uList = linkarray.map((item) => {
            return <li><a href={item.src}>{item.title}</a></li>;
        });

        return (
            <Col span={4}>
                <h3>{props.title}</h3>
                {uList}
            </Col>
        );
    }   else {
        return (
            <Col span={4}>
                <h3>{props.title}</h3>
            </Col>
        );
    }
};

export default FooterCol;