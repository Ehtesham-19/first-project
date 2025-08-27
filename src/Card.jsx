import { useEffect } from "react";
import "./Home.css";

function Card({ img, heading, btnText }) {
   
   
    useEffect(() => {
         console.log("updated")
    },[img])
   
  return (
    <div className="card">
      <div className="img">
              <img
                  src={img}
          alt="clothes"
        />
      </div>
          <h2 className="title">{ heading}</h2>
          <button>{ btnText}</button>
    </div>
  );
}
export default Card;
