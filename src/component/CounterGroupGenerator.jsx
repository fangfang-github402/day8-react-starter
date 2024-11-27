import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);
    const handleChange = (event) => {
        if (event.target.value < 0) {
            setSize(0);
        } else if (event.target.value > 20) {
            setSize(20);
        } else {
            setSize(event.target.value);
        }
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