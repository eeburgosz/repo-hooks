import { useState } from 'react'

export const useCounter = (initialState= 0) => {

    const [counter, setCounter] = useState(initialState);

    const increment= ()=> {
        setCounter(counter+1);
    };

    const decrement= ()=> {
        setCounter(counter-1);
    };
    
    const reset= ()=> {
        setCounter(1);
    }

    const resetTop= ()=> {
        setCounter(30);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        resetTop
    }
}
