import Button from './components/button';
import Counter from './components/counter';
import {useState} from 'react';

const CounterApp = () => {
    const [count,setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    
    }

    return (
        <>
            <Counter count={count}  />
            <Button click={increment} type="button">+</Button>
            <Button click={decrement} type="button">-</Button>
        </>
    )
}

export default CounterApp;