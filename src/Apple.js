import React, {useState} from "react";
import { Link } from "react-router-dom";

const Apple = () => {
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount(count + 1);
    }
    return (
        <div className="snack-space">
        <button onClick={handleClick} id="counter">Get a snack!</button>
        <h3 id="count">{count}</h3>
        <Link to="/">Go Back!</Link>
    </div>
    )
}

export default Apple;