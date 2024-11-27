import {useState} from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    return (
        <div>
            <CounterGroupGenerator setSize={setSize}/>
            <CounterGroup size={size}/>
        </div>
    )
}
export default MultipleCounter;