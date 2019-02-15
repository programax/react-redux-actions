import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action1 } from '../redux/actions';

class Root extends Component {
    state = {}

    componentDidMount() {
        this.props.action1(777);
    }

    render() {
        console.log(this.props);

        return (
            <div>
                Root
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    action1,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);