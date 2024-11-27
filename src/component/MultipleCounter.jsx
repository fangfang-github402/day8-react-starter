import {useState} from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);

    const handleSize = (size) => {
        setSize(size)
    }
    return (<div>
        <CounterGroupGenerator changeSize={handleSize}/>
        <CounterGroup size={size}/>
    </div>)
}
export default MultipleCounter;