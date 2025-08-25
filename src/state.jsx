import { useState } from "react";
function Name() {
    const [name,setname] = useState("ehtesham");
    const [display, setdisplay] = useState(true);
    let change = () => {
        setname ("shahzaib");
    };
 
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={change}>change name</button>
            {display ? <h1>hide or show</h1> : null}
            <button onClick={()=>setdisplay(!display)}>hide or show</button>
        </div>
    )
}
export default Name;