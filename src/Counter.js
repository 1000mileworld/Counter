import React from 'react';
import {connect} from 'react-redux';
import {INCREMENT, DECREMENT} from './actions';

class Counter extends React.Component{
    //state = {count: 0}

    increment = () => {
        // this.setState({
        //     count: this.state.count+1
        // });
        this.props.dispatch({type: INCREMENT});
    }

    decrement = () => {
        // this.setState({
        //     count: this.state.count-1
        // });
        this.props.dispatch({type: DECREMENT});
    }

    render() {
        return(
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{
                    // Replace state:
                    // this.state.count
                    // With props:
                    this.props.count
                    }</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

//Add this function:
function mapStateToProps(state){
    return{
        count: state.count
    };
}

//replace this:
//export default Counter;

//with this:
export default connect(mapStateToProps)(Counter);