import { useState } from "react";
function Counter() {
    const [ count, setcount ] = useState(0);
    return (
        <div>
            <h1>counter:{count}</h1>
            <button onClick={() => {
                setcount(count+1)
            }}>increse</button>
        </div>
    )
}
export default Counter;