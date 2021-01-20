import React from 'react';
import { DatePicker } from 'antd';
import axios from 'axios';

export default class Home extends React.Component {
    componentDidMount() {
        axios.get('/mock/test/getId').then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div className="home">
                <p>user</p>
                <DatePicker />
            </div>
        );
    }
}
