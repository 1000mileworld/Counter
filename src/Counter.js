import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

class Counter extends React.Component{
    //state = {count: 0}

    increment = () => {
        // this.setState({
        //     count: this.state.count+1
        // });
        //this.props.dispatch({type: INCREMENT}); //initially
        //this.props.dispatch(increment()); //after adding action creator
        this.props.increment(); //after mapDispatchToProps
    }

    decrement = () => {
        // this.setState({
        //     count: this.state.count-1
        // });
        //this.props.dispatch({type: DECREMENT}); 
        //this.props.dispatch(decrement()); 
        this.props.decrement();
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

function mapStateToProps(state){
    return{
        count: state.count
    };
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 
const mapDispatchToProps={
    increment,
    decrement
};

//replace this:
//export default Counter;

//with this:
export default connect(mapStateToProps, mapDispatchToProps)(Counter);