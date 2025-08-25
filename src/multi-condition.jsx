import { useState } from "react";
function Condition() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        change
      </button>
      {count == 0 ? (
        <h1>Condition 1</h1>
      ) : count == 1 ? (
        <h2>condition 2</h2>
      ) : count == 2 ? (
        <h3>condition 3</h3>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
}
export default Condition;
