import React from 'react';
import { Col } from 'antd';
import './FooterColumn.css';

//this function creates it so that one can populate a different array of links for each footer column link set

let FooterCol = (props) => {
    if (props.links) {
        let linkarray = props.links;

        let uList = linkarray.map((item, index) => {
            return <li key={index}><a href={item.src}>{item.title}</a></li>;
        });

        return (
            <Col span={4}>
                <h3>{props.title}</h3>
                <ul id={props.id}>
                    {uList}
                </ul>
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