import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);

    const handleChange = (event) => {
        const value = Math.max(0, Math.min(20, parseInt(event.target.value, 10) || 0));
        setSize(value);
    }

    function handleReset() {
        props.changeSize(size);
    }

    return (<div>
            <span>Size:</span>
            <input min={0} max={20} type="number" value={size} onChange={handleChange}/>
            <button onClick={handleReset}>reset</button>
        </div>);
}
export default CounterGroupGenerator;