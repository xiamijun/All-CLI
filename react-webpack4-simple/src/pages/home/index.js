import React from 'react';
import './home.css';
import testImg from '../../assets/test.jpg';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <p>home</p>
                <img src={testImg} alt="" />
            </div>
        );
    }
}
