import React from 'react';
import './App.css';

import Counter from './Counter';

import {createStore} from 'redux'; //need braces due to redux not containing default export
import {Provider} from 'react-redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action){
    //console.log('reducer',state,action);

    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count+1
            };
        case 'DECREMENT':
            return{
                count: state.count-1
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state;
    }
}
const store = createStore(reducer);

// store.dispatch({type: "INCREMENT"});
// store.dispatch({type: "DECREMENT"});
// store.dispatch({type: "RESET"});

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>  
  );
}

export default App;
