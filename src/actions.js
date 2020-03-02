export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//action creators
export function increment(){
    return {type: INCREMENT};
}

export const decrement = () => ({type: DECREMENT});