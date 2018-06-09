import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.scss';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

export default class Test extends React.Component {
    render() {
        return (
            <div>
                <h2>This is a test</h2>
                <DatePicker />
            </div>
            )
    };
}