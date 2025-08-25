import { useState } from "react";
function Toogle() {
    const [display, setdisplay] = useState(true);
    return (
        <div>
            <button onClick={() => {
                
                setdisplay(!display)
            }}>toogle</button>
            {
display? <h1>Ehtesham</h1>:null
            }
            
        </div>
    )
}
export default Toogle