import {useState} from 'react';
import './Counter.css'

export default function Counter(props) {
    const [count, setCount] = useState(0);

    function decrease() {
        setCount(count - 1);
        props.updateSum(-1);
    }

    function increase() {
        setCount(count + 1);
        props.updateSum(1)
    }

    return (<div className={"counter"}>
            <button onClick={increase}>
                +
            </button>
            <span>{count}</span>
            <button onClick={decrease}>
                -
            </button>
        </div>);
}