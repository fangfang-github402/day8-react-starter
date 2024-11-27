import {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function decrease() {
        setCount(count - 1);
    }

    function increase() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={increase}>
                +
            </button>
            <span>{count}</span>
            <button onClick={decrease}>
                -
            </button>
        </div>
    );
}