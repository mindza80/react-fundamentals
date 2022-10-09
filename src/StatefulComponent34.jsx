import { useState } from 'react';

export function StatefulComponent34(){
    const [count, setCount] = useState(0);

    let hasDecrement = count > 0;

    function handleDecrement() {
        if (hasDecrement) {
            setCount(count - 1);
        }
    }

    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <p>
                <span>Result: {count}</span>
            </p>
        </div>
    );
}