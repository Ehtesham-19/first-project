import React, { useState } from "react";

function To_Do() {
  let [task, settask] = useState("");
  let [tasks, settasks] = useState([]);
  let HandleAdd = () => {
    if (task.trim() === "") return;
    settasks([...tasks, task]);
    settask("");
  };
    return (
      
        <div>
            <h1>To do List</h1>
      <input
        type="text"
        placeholder="enter task"
        onChange={(e) => settask(e.target.value)}
        value={task}
      />
      <br></br>
      <button onClick={HandleAdd}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default To_Do;
