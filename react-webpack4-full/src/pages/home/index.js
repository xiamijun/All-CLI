import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './home.css';
import testImg from '../../assets/test.jpg';
import { GET_COUNT, SET_COUNT } from '../../actions/countActions';

class Home extends React.Component {
    componentDidMount() {
        axios.post('/mock/test/saveData', {
            id: 1
        }).then(res => {
            const { setCount } = this.props;
            setCount(1);
        })
    }

    render() {
        return (
            <div className="home">
                <p>home</p>
                <img src={testImg} alt="" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.countReducers.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCount: count => dispatch({ type: SET_COUNT, payload: count })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);