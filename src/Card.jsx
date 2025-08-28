import "./Home.css";

function Card({ img, heading, btnText }) {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="clothes" />
      </div>
      <h2 className="title">{heading}</h2>
      <button>{btnText}</button>
    </div>
  );
}
export default Card;
