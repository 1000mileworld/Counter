import React from 'react';

class Counter extends React.Component{
    state = {count: 0}

    increment = () => {
        this.setState({
            count: this.state.count+1
        });
    }

    decrement = () => {
        
    }
}