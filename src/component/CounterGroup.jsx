import Counter from "./Counter";
import {useState} from "react";

const CounterGroup = (props) => {
    const array = Array.from({length: props.size});
    return (
        <div>
            {array.map((_, index) => {
                return <Counter key={index + Math.random()}/>
            })}
        </div>
    )
}
export default CounterGroup;