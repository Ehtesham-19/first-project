import { useState } from "react";

function Input() {
    const [val, setval] = useState("ehtesham");

    return (
        <div>
            <input onChange={(Event) => setval(Event.target.value )} value={ val}type="text" placeholder="enter name" />
            <h2>{val}</h2>
            <button onClick={()=>setval("")}>clear</button>
        </div>
    )
}
export default Input;